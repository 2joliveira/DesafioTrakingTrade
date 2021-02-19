import { eachDayOfInterval } from 'date-fns';
import { addDays } from 'date-fns/esm';
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

// interface IDataContext {
//   inspections: IServices[];
//   actionsplan: IServices[];
// }

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

  // const today = new Date();

  // const lastweek = addDays(today, -6);

  // const thisWeek = eachDayOfInterval(
  //   { start: lastweek, end: today },
  // );

  return context;
}

export { ServiceProvider, useService };
