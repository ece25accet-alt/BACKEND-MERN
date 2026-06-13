function MovieDetails() {
  return (<>
    <div className="w-80 p-5 bg-green-100 rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold text-blue-700 mb-3 text-center">Movie Details</h1>
      <ul className="space-y-2">
      <li><b>Movie Name:</b> Avatar</li>
      <li><b>Hero Name:</b> Sam</li>
      <li><b>Director Name:</b> James Cameroon</li>
      <li><b>Release Year:</b> 2010</li>
      </ul>
    </div>
    </>
  );
}

export default MovieDetails;