export interface Session {
  host: string;
  status: 'not_started' | 'writing' | 'presenting' | 'voting' | 'action' | 'complete';
  users: SessionUser[],
  columns: SessionColumn[]
}

export interface SessionUser {
  name: string;
  color: string;
  votesRemaining: number
}

export interface SessionColumn {
  name: string;
  cards: SessionCard[];
}

export interface SessionCard {
  id: string;
  text: string;
  author: string;
  authorColor: string;
  status: 'hidden' | 'to_present' | 'presenting' | 'presented',
  votes: string[];
}
