import withLoading from ".";

export const DogImages =(props)=>{
     
    return<>
      {props.data.message.map((dog,index)=><img src={dog} alt={dog} key={index} />)}
    </>
     
   
}

export default withLoading(DogImages,"https://dog.ceo/api/breed/labrador/images/random/6");
