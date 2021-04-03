
const Weather =({data})=>{
console.log(data)
    return(<div  style={{display:'flex'}}>
            {data.map((el,idx)=>{
                return (
                <div key ={idx} className="card" style={{width: '18rem',marginRight:'2rem'}}>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                 
                  <img src={"http://openweathermap.org/img/w/" + el.weather[0].icon + ".png"} />
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
                )
                })
            }
        </div>
    )
}

export default Weather

// a = () => 5