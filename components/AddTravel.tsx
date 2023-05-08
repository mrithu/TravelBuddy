'use client';

import { AiOutlinePlusCircle, AiOutlineArrowRight } from 'react-icons/ai';
import Modal from './Modal';
import { FormEventHandler, useState } from 'react';
import { addNewTravel } from '@/api';
import { v4 as uuidv4 } from 'uuid';
import { useRouter } from 'next/navigation';
import DatePicker from 'react-datepicker';


const AddTravel = () => {
    const router = useRouter();
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [gender, setGender] = useState<string>('0');
    const [language, setLanguage] = useState<string>('0');
    const [age, setAge] = useState<string>('Age');
    const [from, setFrom] = useState<string>('0');
    const [to, setTo] = useState<string>('0');
    const [fromDate, setFromDate] = useState<Date | null>(new Date());
    const [toDate, setToDate] = useState<Date | null>(new Date());

    const handleNewTravelSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
      e.preventDefault();
      await addNewTravel({
        id: uuidv4(),
        name: name,
        gender: gender,
        language: language,
        age: age,
        from: from,
        to: to,
        from_date: fromDate,
        to_date: toDate
      });
      setModalOpen(false);
      setFrom('0');
      setTo('0');
      setLanguage('0');
      router.refresh();
    }

    // const setCalculatedValue: FormEventHandler<HTMLFormElement>  = (e) => {

    // };

  return (
    <div>
      <button onClick={() => setModalOpen(true)} className="btn btn-primary w-full">
        Add Travel Plan<AiOutlinePlusCircle className="ml-2" size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form className="flex flex-col gap-3" onSubmit={e => handleNewTravelSubmit(e)}>
          <h3 className="font-bold text-2xl">Add New Travel</h3>
          <div className="form-control w-full">
            <input type="text" value={name} placeholder="Enter name" className="input input-bordered w-full max-w-xs" onChange={e => setName((e.target.value))}/>
          </div>

          <div className="form-control">
            <div className="input-group">
              <input type="string" value={age} onChange={e => setAge((e.target.value))} className="input input-bordered w-28" />

              <select value={gender} onChange={e => setGender(e.target.value)} className="select select-bordered ml-3 rounded mr-3">
              <option value="0">Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>

              <select value={language} onChange={e => setLanguage(e.target.value)} className="select select-bordered">
                <option value="0">Language</option>
                <option value="English">English</option>
                <option value="Tamil">Tamil</option>
              </select>
            </div>
          </div>

          <div className="form-control w-full">
            <div className="input-group gap-3">

              <select value={from} onChange={e =>setFrom(e.target.value)} className="select select-bordered">
                <option value="0">Source</option>
                <option value="Kochi">Kochi</option>
                <option value="Delhi">Delhi</option>
                <option value="Shimla">Shimla</option>
              </select>

              <AiOutlineArrowRight className='ml-3 mt-4 mr-3 text-xl'  />

              <select value={to} onChange={e => setTo(e.target.value)} className="select select-bordered">
                <option value="0">Destination</option>
                <option value="Kochi">Kochi</option>
                <option value="Delhi">Delhi</option>
                <option value="Shimla">Shimla</option>
              </select>
            </div>
          </div>

          <div className="form-control w-full">
              <div className="input-group flex flex-row">
                
                <DatePicker 
                  selected={fromDate} 
                  onChange={(date) => setFromDate(date)} 
                  showYearDropdown
                  className="input input-bordered w-44"  
                />
                  <AiOutlineArrowRight className='-ml-7 mt-1 mr-6 text-4xl'  />
                <DatePicker 
                  selected={toDate} 
                  onChange={(date) => setToDate(date)} 
                  showYearDropdown
                  className="input input-bordered w-44"  
                />
              </div>

          </div>


          <div className="modal-action">
            <button 
              className='btn btn-primary'
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddTravel
