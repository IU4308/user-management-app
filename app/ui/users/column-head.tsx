import { ChevronDownIcon, ChevronUpDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid"

const ColumnHead = ({ 
  title,
  index,
  sorterId,
  handleSort,
  isDescending,
  // setIsDescending
}: { 
  title: string;
  index: number;
  sorterId: number;
  handleSort: (id: number) => void;
  isDescending: boolean;
}) => {
  return (
    <th scope="col d-flex align-items-center">
      <button 
        className="border-0 bg-white"
        onClick={() => {
          handleSort(index);
        }}  
      >
        <span>{title}</span>
        
        {index === sorterId ? (
          isDescending ? <ChevronDownIcon className="icon-2"/> : <ChevronUpIcon   className="icon-2" />
        ) : (
          <ChevronUpDownIcon className='icon-2' />
        )}
      </button>
    </th>
  )
}

export default ColumnHead
