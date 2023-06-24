const ListItem = ({first_name, id, avatar}) => {
    return (
        <div className="flex relative items-center p-3 border border-gray-400 rounded-md flex-col w-full">
            <div className="absolute -right-3 -top-3 p-2 px-4 rounded-full bg-black text-white font-semibold">{id}</div>
            <img src={avatar} className="w-full aspect-video" alt={id} /> 
            <div className="text-lg">{first_name}</div>
        </div>
    )
}

export default ListItem;