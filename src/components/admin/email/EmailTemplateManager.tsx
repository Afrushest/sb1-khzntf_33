import React, { useState } from 'react';
import { Mail, Plus, Edit2, Trash } from 'lucide-react';
import EmailTemplateModal from './EmailTemplateModal';

interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  content: string;
  type: 'confirmation' | 'reminder' | 'waitlist' | 'cancellation';
  variables: string[];
}

const EmailTemplateManager = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<EmailTemplate | null>(null);

  const [templates] = useState<EmailTemplate[]>([
    {
      id: '1',
      name: 'Event Registration Confirmation',
      subject: 'Registration Confirmed: {{event_name}}',
      content: 'Dear {{participant_name}},\n\nYour registration for {{event_name}} has been confirmed.',
      type: 'confirmation',
      variables: ['event_name', 'participant_name', 'event_date', 'event_time']
    },
    {
      id: '2',
      name: 'Event Reminder',
      subject: 'Reminder: {{event_name}} is Tomorrow',
      content: 'Dear {{participant_name}},\n\nThis is a reminder about tomorrow\'s event.',
      type: 'reminder',
      variables: ['event_name', 'participant_name', 'event_date', 'event_time']
    }
  ]);

  const handleEditTemplate = (template: EmailTemplate) => {
    setSelectedTemplate(template);
    setShowModal(true);
  };

  const handleAddTemplate = () => {
    setSelectedTemplate(null);
    setShowModal(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-900">Email Templates</h2>
        <button
          onClick={handleAddTemplate}
          className="flex items-center px-4 py-2 bg-linsoft-red text-white rounded-md hover:bg-red-700"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Template
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-linsoft-red mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">{template.name}</h3>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditTemplate(template)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <Edit2 className="h-5 w-5" />
                </button>
                <button className="text-gray-400 hover:text-red-500">
                  <Trash className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-500">Subject</label>
                <p className="mt-1 text-sm text-gray-900">{template.subject}</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Preview</label>
                <p className="mt-1 text-sm text-gray-900 whitespace-pre-line">
                  {template.content}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500">Variables</label>
                <div className="mt-1 flex flex-wrap gap-2">
                  {template.variables.map((variable) => (
                    <span
                      key={variable}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {`{{${variable}}}`}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <EmailTemplateModal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setSelectedTemplate(null);
        }}
        template={selectedTemplate}
      />
    </div>
  );
};

export default EmailTemplateManager;