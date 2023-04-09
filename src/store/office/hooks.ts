import { OfficeResponse } from 'mocks/data/office';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useOffice = () => {
  const office = useQuery<OfficeResponse>({
    queryKey: ['OFFICE'],
    queryFn: newOffice => {
      return axios.get<OfficeResponse>('/api/office', newOffice).then(({ data }) => data);
    },
  });

  return {
    ...office,
  };
};

export default useOffice;
