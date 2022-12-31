import { useEffect, useState } from 'react'
import "./Collection.css"

export default function Collection() {

  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("all")

  const Inc = () => {

    setPage(page + 1)

    window.scrollTo(0, 0)

  }
  const dec = () => {

    setPage(page - 1)
    window.scrollTo(0, 0)

  }

  useEffect(() => {
    const dw = () => {

      let url = `https://api.unsplash.com/search/collections?page=${page}&query=${searchValue === "" ? "all" : searchValue}&per_page=28&client_id=${process.env.REACT_APP_apikey}`
      fetch(url).then((response) => {
        return response.json();
      }).then((data) => {


        setResults(data.results)



      }, (error) => {
        console.log(error);
      })


    }
    dw()


  }, [searchValue, page])

  const handleInputChange = () => {
    let SearchInput = document.getElementById('search')
    setSearchValue(SearchInput.value)

  }


  return (

    <>
      <div className='container text-center my-5'>

        <input type="search" className='form-control' id="search" placeholder='Search Images' />

        <button type='submit' disabled={!searchValue} onClick={handleInputChange} className='btn btn-dark my-2'>Search</button>

      </div>




      <section className="img_container">

        {results.map((value) => {
          return (

            <div className="img_box" key={value.share_key} >

              <img className="imgs" src={value.cover_photo.urls.small} loading='lazy' decoding='async' alt='' />

            </div>

          )

        })


        }
        <div className='notFoundContainer'>
          <h1 className='notFound'> {`${results.length === 0 ? "Images Not Found" : ""}`}</h1>
        </div>

      </section>



      <div className="btn_nxt_container">

        <button className="nxt_btn" onClick={dec} >Preview</button>
        <button className="nxt_btn" onClick={Inc}>Next</button>

      </div>
    </>
  )
}