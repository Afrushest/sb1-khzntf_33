import axios from 'axios';
import { Webinar, WebinarInput, WebinarResponse } from '../types/webinar';

const API_URL = 'http://localhost:3000/api';

const getAuthHeaders = () => ({
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    'Content-Type': 'application/json'
  }
});

export const getWebinars = async (isPast: boolean = false): Promise<Webinar[]> => {
  try {
    const response = await axios.get<WebinarResponse[]>(`${API_URL}/webinars?isPast=${isPast}`);
    return response.data.map(webinar => ({
      id: String(webinar.id),
      title: String(webinar.title || ''),
      date: String(webinar.date || ''),
      time: String(webinar.time || ''),
      type: 'virtual',
      theme: String(webinar.theme || ''),
      description: webinar.description || undefined,
      agenda: webinar.agenda || undefined,
      maxParticipants: Number(webinar.max_participants) || 0,
      currentParticipants: Number(webinar.current_participants) || 0,
      hasWaitingList: Boolean(webinar.has_waiting_list),
      isPast: Boolean(webinar.is_past),
      visitCount: Number(webinar.visit_count) || 0,
      recordingUrl: webinar.recording_url || undefined
    }));
  } catch (error) {
    console.error('Error fetching webinars:', error);
    throw error;
  }
};

export const getWebinarById = async (id: string): Promise<Webinar> => {
  try {
    const response = await axios.get<WebinarResponse>(`${API_URL}/webinars/${id}`);
    const webinar = response.data;
    return {
      id: String(webinar.id),
      title: String(webinar.title || ''),
      date: String(webinar.date || ''),
      time: String(webinar.time || ''),
      type: 'virtual',
      theme: String(webinar.theme || ''),
      description: webinar.description || undefined,
      agenda: webinar.agenda || undefined,
      maxParticipants: Number(webinar.max_participants) || 0,
      currentParticipants: Number(webinar.current_participants) || 0,
      hasWaitingList: Boolean(webinar.has_waiting_list),
      isPast: Boolean(webinar.is_past),
      visitCount: Number(webinar.visit_count) || 0,
      recordingUrl: webinar.recording_url || undefined
    };
  } catch (error) {
    console.error('Error fetching webinar:', error);
    throw error;
  }
};

export const createWebinar = async (webinarData: WebinarInput): Promise<Webinar> => {
  try {
    // Create a clean payload with only the necessary data
    const payload = {
      title: String(webinarData.title || ''),
      date: String(webinarData.date || ''),
      time: String(webinarData.time || ''),
      type: 'virtual',
      theme: String(webinarData.theme || ''),
      description: webinarData.description || null,
      agenda: webinarData.agenda || null,
      max_participants: Number(webinarData.maxParticipants) || 0,
      current_participants: 0,
      has_waiting_list: Boolean(webinarData.hasWaitingList)
    };

    const response = await axios.post<WebinarResponse>(
      `${API_URL}/webinars`,
      payload,
      getAuthHeaders()
    );

    // Transform the response data to match our Webinar type
    return {
      id: String(response.data.id),
      title: String(response.data.title || ''),
      date: String(response.data.date || ''),
      time: String(response.data.time || ''),
      type: 'virtual',
      theme: String(response.data.theme || ''),
      description: response.data.description || undefined,
      agenda: response.data.agenda || undefined,
      maxParticipants: Number(response.data.max_participants) || 0,
      currentParticipants: Number(response.data.current_participants) || 0,
      hasWaitingList: Boolean(response.data.has_waiting_list),
      isPast: Boolean(response.data.is_past),
      visitCount: Number(response.data.visit_count) || 0,
      recordingUrl: response.data.recording_url || undefined
    };
  } catch (error) {
    console.error('Error creating webinar:', error);
    throw error;
  }
};

export const updateWebinar = async (id: string, webinarData: Partial<WebinarInput>): Promise<Webinar> => {
  try {
    // Create a clean payload with only the necessary data
    const payload = {
      title: webinarData.title,
      date: webinarData.date,
      time: webinarData.time,
      type: 'virtual',
      theme: webinarData.theme,
      description: webinarData.description || null,
      agenda: webinarData.agenda || null,
      max_participants: Number(webinarData.maxParticipants) || 0,
      has_waiting_list: Boolean(webinarData.hasWaitingList)
    };

    const response = await axios.put<WebinarResponse>(
      `${API_URL}/webinars/${id}`,
      payload,
      getAuthHeaders()
    );

    // Transform the response data to match our Webinar type
    return {
      id: String(response.data.id),
      title: String(response.data.title || ''),
      date: String(response.data.date || ''),
      time: String(response.data.time || ''),
      type: 'virtual',
      theme: String(response.data.theme || ''),
      description: response.data.description || undefined,
      agenda: response.data.agenda || undefined,
      maxParticipants: Number(response.data.max_participants) || 0,
      currentParticipants: Number(response.data.current_participants) || 0,
      hasWaitingList: Boolean(response.data.has_waiting_list),
      isPast: Boolean(response.data.is_past),
      visitCount: Number(response.data.visit_count) || 0,
      recordingUrl: response.data.recording_url || undefined
    };
  } catch (error) {
    console.error('Error updating webinar:', error);
    throw error;
  }
};

export const deleteWebinar = async (id: string): Promise<void> => {
  try {
    await axios.delete(
      `${API_URL}/webinars/${id}`,
      getAuthHeaders()
    );
  } catch (error) {
    console.error('Error deleting webinar:', error);
    throw error;
  }
};