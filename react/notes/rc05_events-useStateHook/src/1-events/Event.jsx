

const Event = () => {
    const handleTikla = (e) => {
        alert("Tiklandi")
        console.log("tiklandi");
        console.log(e);
        console.log(e.target);
        console.log("Name:", e.target.name);
        console.log("ID:", e.target.id);
    }
  return (
    <div>
        <h1>Events</h1>
        <button onClick={handleTikla} id="btn" name="my-button">Tikla</button>
    </div>
  )
}

export default Event