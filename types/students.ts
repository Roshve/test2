export interface Student {
  id: number;
  image: string;
  name: string;
  lastName: string;
  score: number
  status: Status
}

interface Status {
  status: 'present' | 'present virtual' | 'absence' | 'late' | 'justified absence' | 'justified late';
}