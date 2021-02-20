import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface IServices {
  id: number;
  user: string;
  service: string;
  state: string;
  created_at: string;
  updated_at: string;
}

const ServiceContext = createContext<IServices[]>([] as IServices[]);

const ServiceProvider: React.FC = ({ children }) => {
  const [services, setServices] = useState<IServices[]>([]);

  useEffect(() => {
    api.get('user_service').then(response => {
      setServices(response.data);
    });
  }, []);

  return (
    <ServiceContext.Provider value={services}>
      {children}
    </ServiceContext.Provider>
  );
}

function useService(): IServices[] {
  const context = useContext(ServiceContext);

  return context;
}

export { ServiceProvider, useService };
