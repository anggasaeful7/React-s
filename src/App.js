import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="ParentBox">
       <FotoProduk />
       <ProdukInfo isDiskon="yes" category="SNEAKERS" name="Sepatu Mahal"/>

       <div className='ReviewBox'>
         <h2>Reviews</h2>
         <div className='Item'>
           <img src='imageP.png'/>
           <div className='User'>
             <h3>Mayoshi Setiawan</h3>
             <p>Harganya murah tapi kualitasnya terbaik</p>
           </div>
         </div>
       </div>
    </div>
  );
}

function FotoProduk() {
  return(
    <div className="foto">
          <img src='sepatu.jpg'/>
       </div>
  );
  
}

function ReviewItem() {
  const Users = [
    {
      "id": 1,
      "nama": "Angga Saeful",
      "review": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, vero inventore! Rem reprehenderit delectus ducimus!"
    },
    {
      "id": 2,
      "nama": "kuyatuhkuy",
      "review": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, vero inventore! Rem reprehenderit delectus ducimus!"
    },
    {
      "id": 3,
      "nama": "prayoga",
      "review": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, vero inventore! Rem reprehenderit delectus ducimus!"
    }
    
  ]
}

function cekDiskon(props) {
  const { isDiskon } = props;
  if (isDiskon) {
    return(
      <p>Diskon 50% OFF!</p>
    );
  }
   else {
    return(
      <p>Tidak ada diskon</p>
    );
  }   
}

function ProdukInfo(props) {
  const {category,name,isDiskon} = props;
  const benefits = ["Tidak mudah rusak","Berwarna cerah","Kuat dan tahan lama"];
  const listBenerfit = benefits.map((benefit)=>
    <li>{benefit}</li>
  );
  return(
    <div className='Deskripsi'>
         <p className='Cate'>{category}</p>
         <h1 className='Title'>{name}</h1>
         <p className='Price'>IDR 74.000.000</p>
         <cekDiskon isDiskon={isDiskon}/>
         <p className='Info'>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia labore, impedit architecto ex harum at inventore fuga culpa animi sint veniam, alias velit deleniti id odio quis assumenda nihil laborum rem non fugit delectus. Omnis culpa recusandae eius sint quis qui ea, reprehenderit voluptas expedita earum aperiam corrupti harum accusantium alias provident sequi deleniti repudiandae totam nulla accusamus non fugiat modi? Excepturi earum nostrum aut. Illum quo est pariatur repudiandae!  
         </p>
         <p>Benerfits :</p>
         <ul>
           {listBenerfit}
         </ul>
         <a onClick={(e)=>tambahCart(name,e)} href='#'>Add to Cart</a>
    </div>
  );
  
}
function tambahCart(e) {
  return console.log("Menambak Produk " + e);
}
export default App;
