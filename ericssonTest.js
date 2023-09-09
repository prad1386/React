
import cx from 'classnames';
import React,{useState} from 'react';

const LikeDislike= () => {
const [likeCount,setLikeCount] = useState(100);
const [dislikeCount,setDislikeCount] = useState(25);
const [liked,setLiked] = useState(null);
const [disliked,setDisliked] = useState(null);

const handleLike=()=>{
  !liked ? setLikeCount(likeCount+1) : setLikeCount(likeCount-1);  
  setLiked(!liked);
  if(disliked){
    setDislikeCount(dislikeCount-1);
    setDisliked(false);
  }
}

const handleDislike=()=>{ 
   !disliked ?  setDislikeCount(dislikeCount+1) :  setDislikeCount(dislikeCount-1);  
  setDisliked(!disliked);
  if(liked){
      setLikeCount(likeCount-1);
      setLiked(false);
    }
}

  return (
    <>
      <div>
        <button className={cx("like-button",{liked,})} onClick={handleLike}>
        Like | <span className="likes-counter">{likeCount}</span>
        </button>
        <button className={cx("dislike-button",{disliked,})} onClick={handleDislike}>
        Dislike | <span className="dislikes-counter">{dislikeCount}</span>
        </button>
      </div>
      <style>{`
                    .like-button, .dislike-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:   #585858;
                        margin-right: 0.5rem;
                    }

                    .liked, .disliked {
                        font-weight: bold;
                        color: #1565c0;
                    }
                `}</style>
    </>
  );
};

export default LikeDislike;