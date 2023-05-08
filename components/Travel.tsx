'use client';

import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineEdit, AiOutlineArrowRight } from 'react-icons/ai';
import { IoTrashBinOutline } from 'react-icons/io5';
import DatePicker from 'react-datepicker';
import { ITravel } from "@/types/travels";
import { deleteTravel, editTravel, findBuddy } from "@/api";
import Modal from "./Modal";
import dayjs from "dayjs";
import { BsSearchHeart } from "react-icons/bs";


interface TravelProps {
    Travel: ITravel
}


const Travel: React.FC<TravelProps> = ({ Travel }) => {
  const router = useRouter();
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const [openModalDelete, setOpenModalDelete] = useState<boolean>(false);
  const [openModalBuddy, setOpenModalBuddy] = useState<boolean>(false);
  const [nameToEdit, setNameToEdit] = useState<string>(Travel.name);
  const [genderToEdit, setGenderToEdit] = useState<string>(Travel.gender);
  const [languageToEdit, setLanguageToEdit] = useState<string>(Travel.language);
  const [ageToEdit, setAgeToEdit] = useState<string>(Travel.age);
  const [fromToEdit, setFromToEdit] = useState<string>(Travel.from);
  const [toToEdit, setToToEdit] = useState<string>(Travel.to);
  const [fromDateToEdit, setFromDateToEdit] = useState<Date | null>(Travel.from_date);
  const [toDateToEdit, setToDateToEdit] = useState<Date | null>(Travel.to_date);
  const [buddyResult, setBuddyResult] = useState<string>('???');

  const handleEditTravelSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTravel({
      id: Travel.id,
      name: nameToEdit,
      gender: genderToEdit,
      language: languageToEdit,
      age: ageToEdit,
      from: fromToEdit,
      to: toToEdit,
      from_date: fromDateToEdit,
      to_date: toDateToEdit
    });
    setOpenModalEdit(false);
    router.refresh();
  };

  const handleDeleteTravel = async (id:string) => {
    await deleteTravel(id);
    setOpenModalDelete(false);
    router.refresh();
  }
  const handleFindBuddy = async (id:string) => {
    const bud = await findBuddy(id);
    setBuddyResult(bud.name);
    setOpenModalBuddy(true);
  }

  const setDate = (date: Date | null) => {
    if (date instanceof Date) {
      return date;
    }
    else if (typeof date === 'string') {
      return new Date(date);
    }
    return date;
  }



  return (
    <tr key={Travel.id}>
        <td>{Travel.name}</td>
        <td>{Travel.gender}</td>
        <td>{Travel.language}</td>
        <td>{Travel.age}</td>
        <td>{Travel.from}</td>
        <td>{Travel.to}</td>
        <td>{dayjs(Travel.from_date).format('MMM D, YYYY')}</td>
        <td>{dayjs(Travel.to_date).format('MMM D, YYYY')}</td>
        
 
        <td className="flex gap-5">
          <AiOutlineEdit onClick={() => setOpenModalEdit(true)} cursor="pointer" size="20" />
          <Modal modalOpen={openModalEdit} setModalOpen={setOpenModalEdit}>
            <form  className="flex flex-col gap-3" onSubmit={e => handleEditTravelSubmit(e)}>
              <h3 className="font-bold text-2xl">Edit Travel</h3>
              <div className="form-control w-full">
                <input 
                    type="text" 
                    value={nameToEdit} 
                    onChange={e => setNameToEdit(e.target.value)}
                    placeholder="Enter name" 
                    className="input input-bordered w-full max-w-xs" 
                  />
              </div>
              <div className="form-control">
                <div className="input-group">
                <input type="string" value={ageToEdit} onChange={e => setAgeToEdit((e.target.value))} className="input input-bordered w-28"  />

                <select value={genderToEdit} onChange={e => setGenderToEdit(e.target.value)} className="select select-bordered ml-3 rounded mr-3">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>

                  <select value={languageToEdit} onChange={e => setLanguageToEdit(e.target.value)} className="select select-bordered">
                    <option value="English">English</option>
                    <option value="Tamil">Tamil</option>
                  </select>
                </div>
              </div>

              <div className="form-control w-full">
                <div className="input-control gap-3 flex flex-row">
                <select value={fromToEdit} onChange={e => setFromToEdit(e.target.value)} className="select select-bordered">
                    <option value="Kochi">Kochi</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Shimla">Shimla</option>
                  </select>

                  <AiOutlineArrowRight className='ml-3 mt-4 mr-3 text-xl'  />

                  <select value={toToEdit} onChange={e => setToToEdit(e.target.value)} className="select select-bordered">
                  <option value="Kochi">Kochi</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Shimla">Shimla</option>
                  </select>
                </div>
              </div>

              <div className="form-control w-full">
                <div className="input-group flex flex-row">
                  <DatePicker 
                      selected={setDate(fromDateToEdit)} 
                      onChange={(date) => setFromDateToEdit(date)} 
                      showYearDropdown
                      className="input input-bordered w-44"  
                    />
                  <AiOutlineArrowRight className='-ml-7 mt-1 mr-6 text-4xl'  />
                  <DatePicker 
                      selected={setDate(toDateToEdit)} 
                      onChange={(date) => setToDateToEdit(date)} 
                      showYearDropdown
                      className="input input-bordered w-44"  
                    />
                </div>
              </div>

              <div className="modal-action">
                <button className='btn' type="submit"> Submit </button>
              </div>
            </form>
          </Modal>

          <IoTrashBinOutline onClick={() => setOpenModalDelete(true)} cursor="pointer" size="20" />
          <Modal modalOpen={openModalDelete} setModalOpen={setOpenModalDelete}>
              <h3>Are you sure you want to delete this travel?</h3>
              <div className="alert alert-warning shadow-lg">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  <span>Warning: The record will be deleted permanently.</span>
                </div>
              </div>
              <div className="modal-action">
                <button 
                  onClick={() => handleDeleteTravel(Travel.id)}
                  className='btn btn-danger'
                  type="submit"
                >
                  Yes!, Delete this Record
                </button>
              </div>
          </Modal>
          <BsSearchHeart onClick={() => handleFindBuddy(Travel.id)} cursor="pointer" size="20"/>
          <Modal modalOpen={openModalBuddy} setModalOpen={setOpenModalBuddy}>
          <div className="alert shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              <span>Your buddy for this journey is {buddyResult}</span>
              {/* <button 
                  onClick={() => handleFindBuddy(Travel.id)}
                  className='btn'
                  type="submit"
                ></button> */}
            </div>
            
          </div>
          <div className="modal-action"> 
              {/* <button className="btn btn-sm btn-ghost" onClick={() =>setOpenModalBuddy(false)}>Deny</button> */}
              <button className="btn btn-sm btn-primary" onClick={() =>setOpenModalBuddy(false)}>Accept</button>
            </div>
          </Modal>
        </td>
    </tr>
  )
}

export default Travel
