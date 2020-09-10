import React, { useState, useEffect } from "react";

export const App = () => {
  const [value, setValue] = useState("")
  const [state, setState] = useState({ loading: true, data: null, error: null })

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/fibonacci?number=${value}`)
    .then((response) => response.json()).then((data) => {
      if (data) {
        setState({ ...state, loading: false, data: data })
      }
    }).catch((e) => setState({ loaging: false, data: null, error: e.message }))

  }, [value])

  console.log(state.data)
  const handleSubmit = (e) => {
    e.preventDefault()

    /*fetch(`http://127.0.0.1:5000/fibonacci`, {
      method: "POST   ",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        value
      })
    })*/
  }

  

  return (
    <div className="container ">
      <div className="col-sm-12 my-auto ">
        <p className="col-12">Fibonacci</p>
      </div>
      <form onSubmit={e => handleSubmit(e)} >
        <div className="form-group">
          <div className="col-12 my-auto ">
            <label >Fibonacci Limit</label>
            <input type="number" className="col-12" name="number" placeholder="Enter a Number" value={value} onChange={(e) => {
              setValue(e.target.value)
            }} />

            <small className="form-text text-muted">Choose a number.</small>

          </div>
        </div>
      </form>
      <ul>{state.data && state.data.map((value, index) => (
        <li key={index}>{value}</li>
      ))}</ul>
    </div>

  )

}
