import axios from 'axios';
import { Event, EventInput } from '../types/event';

const API_URL = 'http://localhost:3000/api';

const getAuthHeaders = () => ({
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
    'Content-Type': 'application/json'
  }
});

export const getEvents = async (isPast: boolean = false): Promise<Event[]> => {
  try {
    const response = await axios.get(`${API_URL}/events?isPast=${isPast}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const getEventById = async (id: string): Promise<Event> => {
  try {
    const response = await axios.get(`${API_URL}/events/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching event:', error);
    throw error;
  }
};

export const createEvent = async (eventData: EventInput): Promise<Event> => {
  try {
    const response = await axios.post(
      `${API_URL}/events`,
      eventData,
      getAuthHeaders()
    );
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
    throw error;
  }
};

export const updateEvent = async (id: string, eventData: EventInput): Promise<Event> => {
  try {
    const response = await axios.put(
      `${API_URL}/events/${id}`,
      eventData,
      getAuthHeaders()
    );
    return response.data;
  } catch (error) {
    console.error('Error updating event:', error);
    throw error;
  }
};

export const deleteEvent = async (id: string): Promise<void> => {
  try {
    await axios.delete(
      `${API_URL}/events/${id}`,
      getAuthHeaders()
    );
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
};

export const registerForEvent = async (eventId: string): Promise<void> => {
  try {
    await axios.post(
      `${API_URL}/events/${eventId}/register`,
      {},
      getAuthHeaders()
    );
  } catch (error) {
    console.error('Error registering for event:', error);
    throw error;
  }
};

export const cancelRegistration = async (eventId: string, reason: string): Promise<void> => {
  try {
    await axios.delete(
      `${API_URL}/events/${eventId}/register`,
      {
        ...getAuthHeaders(),
        data: { reason }
      }
    );
  } catch (error) {
    console.error('Error cancelling registration:', error);
    throw error;
  }
};

export const getEventRegistrations = async (eventId: string): Promise<any[]> => {
  try {
    const response = await axios.get(
      `${API_URL}/events/${eventId}/registrations`,
      getAuthHeaders()
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching event registrations:', error);
    throw error;
  }
};