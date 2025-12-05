import { Link } from "react-router-dom";

export default function ListingItem({ listing, id, onEdit, onDelete }) {
  return (
    <li className="relative bg-white flex flex-col shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150">

      {/* CLICKABLE SECTION */}
      <Link to={`/category/${listing.category}/${id}`}>
        <div className="h-[200px] w-full overflow-hidden mb-2">
          <img
            className="h-full w-full object-cover hover:scale-105 transition duration-200"
            loading="lazy"
            src={listing.images[0]}
            alt={listing.name}
          />
        </div>

        {/* TYPE TAG */}
        <span className="absolute top-2 left-2 bg-[#0B6E4F] text-white text-[12px] uppercase font-bold rounded px-2 py-1 shadow-md">
          {listing.type}
        </span>

        {/* DETAILS */}
        <div className="w-full p-3">
          {/* ADDRESS */}
          <div className="flex items-center space-x-1 mb-1">
            <i className="fa-solid fa-location-dot text-xs" style={{ color: "#0B6E4F" }}></i>
            <p className="font-medium text-sm text-gray-600 truncate">
              {listing.address}
            </p>
          </div>

          {/* NAME */}
          <p className="font-semibold text-[16px] truncate leading-5 mb-0">
            {listing.name}
          </p>
        </div>
      </Link>

      {/* COINS + EDIT + DELETE (same line) */}
      <div className="w-full flex justify-between items-center px-3 pb-3 mt-0">
<div>
        {/* Coins */}
        <p className="text-[#0B6E4F] font-bold text-[16px] flex items-center">
          <i className="fa-solid fa-coins text-base mr-1"></i>
          {listing.coins.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
</div>
        {/* Edit Button */}
      <div className="mr-2">
             {onEdit && ( <span onClick={() => onEdit(listing.id)} className="text-[#0B6E4F] mx-3">
            <i className="fa-solid fa-pencil text-lg"></i>
          </span>)}


        {/* Delete Button */}
         {onDelete && (
          <span onClick={() => onDelete(listing.id)} className="text-red-600">
            <i className="fa-solid fa-trash text-lg"></i>
          </span>)}
  </div>
      </div>
    </li>
  );
}
