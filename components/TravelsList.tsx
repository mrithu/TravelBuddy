import { ITravel } from '@/types/travels';
import Travel from './Travel';

interface TravelsListProps {
    Travels: ITravel[];
}


const TravelsList: React.FC<TravelsListProps> = ({ Travels }) => {
  if (Travels.length < 1) {
    return (
      <div className="hero min-h-full bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello there</h1>
            <p className="py-6"> You have no travel plans as of now :(</p>
            <p>Please click on the Add Travel button above to send in a new request for a buddy and begin your adventure.</p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="overflow-x-auto">
    <table className="table table-compact w-full">
        <thead>
        <tr>
            <th>Name</th> 
            <th>Gender</th> 
            <th>Language</th> 
            <th>Age</th> 
            <th>From</th> 
            <th>To</th> 
            <th>From Date</th>
            <th>To Date</th>
            <th></th>
        </tr>
        </thead> 
        <tbody>
        {Travels.map(txn => <Travel key={txn.id} Travel={txn} />)}
        </tbody> 
    </table>
    </div>
  )
}

export default TravelsList
