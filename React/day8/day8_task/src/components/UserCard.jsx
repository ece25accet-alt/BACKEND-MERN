

const UserCard = ({color, border}) => {
  return (
    <>
    <div className="h-screen flex flex-col justify-center items-center" style={{backgroundColor:border}}>

        <div className="h-75 w-75 border-4 flex flex-col justify-center text-center" style={{backgroundColor:color}}> 
            <h1 className="my-3 text-4xl">Manikandan</h1>
            <h2 className="my-3 text-2xl">Full Stack Developer</h2>
        </div>

    </div>
    </>
  )
}

export default UserCard
