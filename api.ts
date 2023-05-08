import { ITravel } from "./types/travels";

const baseUrl:string = 'http://localhost:3001';

export const getAllTravels = async ():Promise<ITravel[]> => {
    const res = await fetch(`${baseUrl}/Travels`, {cache: 'no-store'});
    const Travels = await res.json();
    return Travels;
}

export const addNewTravel = async (Travel: ITravel): Promise<ITravel> => {
    const res = await fetch(`${baseUrl}/Travels`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Travel)
    });
    const newTravel = await res.json();
    return newTravel;
}

export const editTravel = async (Travel: ITravel): Promise<ITravel> => {
    const res = await fetch(`${baseUrl}/Travels/${Travel.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Travel)
    });
    const updatedTravel = await res.json();
    return updatedTravel;
}

export const deleteTravel = async (id: string): Promise<void> => {
    await fetch(`${baseUrl}/Travels/${id}`, {
        method: 'DELETE'
    });
}
