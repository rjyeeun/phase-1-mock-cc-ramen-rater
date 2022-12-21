// // write your code here

const url = "http://localhost:3000/ramens"
const ramenMenu = document.querySelector('div#ramen-menu')
const div = document.querySelector('#ramen-detail')
const img = document.querySelector('.detail-image')
const h2 = document.querySelector('.name')
const h3 = document.querySelector('.restaurant')
const rating = document.querySelector('#rating-display')
const comment = document.querySelector('#comment-display')
const form = document.querySelector("#new-ramen")
// - See all ramen images in the `div` with the id of `ramen-menu`. When the page
//   loads, request the data from the server to get all the ramen objects. Then,


const getAllRamenObj = () => {
    fetch (url)
    .then (res => res.json())
    .then (data => {
        data.forEach(ramens => 
            addImg(ramens))
    }) 

}



//   display the image for each of the ramen using an `img` tag inside the
//   `#ramen-menu` div.

const addImg = (ramens) => {
    const ramenImg = document.createElement('img')
    ramenImg.src = ramens.image
    ramenImg.alt = ramens.name
   ramenMenu.appendChild(ramenImg)
    
   ramenImg.addEventListener('click', () => 
   ramenMenuInfo(ramens))

  
}

// - Click on an image from the `#ramen-menu` div and see all the info about that
//   ramen displayed inside the `#ramen-detail` div and where it says
//   `insert comment here` and `insert rating here`.


const ramenMenuInfo = (ramens) => {
 img.src = ramens.image
 h2.innerText = ramens.name
 h3.innerText = ramens.restaurant 
 rating.innerText = ramens.rating
 comment.innerText = ramens.comment

}




// - Create a new ramen after submitting the `new-ramen` form. The new ramen should
//   be added to the`#ramen-menu` div. The new ramen does not need to persist; in
//   other words, if you refresh the page, it's okay that the new ramen is no
//   longer on the page
const createNewRamen = (e) => {
    e.preventDefault()
    let formData = {
        name : e.target.name.value,
        restaurant : e.target.restaurant.value,
        image: e.target.image.value,
        rating: e.target.rating.value,
        comment: e.target['new-comment'].value

    }
    console.log(formData)
    addImg(formData)
}



                
 
        




getAllRamenObj ()
form.addEventListener('submit', (e) => {
createNewRamen(e)
})