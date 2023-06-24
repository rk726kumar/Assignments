const ListContainer = ({children}) => {
    return (
        <div className="flex flex-col gap-3 w-[300px]">
        {children}
        </div>
    )
}

export default ListContainer;