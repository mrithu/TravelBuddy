export interface ITravel {
    id: string;
    name: string;
    gender: string;
    language: string;
    age: string;
    from: string;
    to: string;
    from_date: Date | null;
    to_date: Date | null;
}