import React from 'react';
import { Server, Cloud, Shield, Database, Terminal, Network, Cpu, Settings } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Theme {
  id: string;
  name: string;
  icon: LucideIcon;
}

interface ProductThemesProps {
  activeTheme: string;
  onThemeChange: (theme: string) => void;
}

const ProductThemes: React.FC<ProductThemesProps> = ({ activeTheme, onThemeChange }) => {
  const themes: Theme[] = [
    { id: 'platforms', name: 'Platforms', icon: Server },
    { id: 'cloud', name: 'Cloud & Hybrid Cloud', icon: Cloud },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'storage', name: 'Storage & Data', icon: Database },
    { id: 'automation', name: 'Automation & Management', icon: Terminal },
    { id: 'networking', name: 'Networking', icon: Network },
    { id: 'containers', name: 'Containers & Kubernetes', icon: Cpu },
    { id: 'integration', name: 'Integration & APIs', icon: Settings }
  ];

  return (
    <nav className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 px-4">Categories</h2>
      <div className="space-y-1">
        {themes.map((theme) => {
          const Icon = theme.icon;
          return (
            <button
              key={theme.id}
              onClick={() => onThemeChange(theme.id)}
              className={`w-full flex items-center px-4 py-2 text-sm rounded-md transition-colors ${
                activeTheme === theme.id
                  ? 'bg-red-50 text-linsoft-red'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {theme.name}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default ProductThemes;