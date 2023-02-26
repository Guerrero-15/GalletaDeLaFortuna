function RandomPhrases ({PhrasesDatas}){
  return(
    <div className="PhrasesCelebres">
      <p>{PhrasesDatas.phrase}</p>
      <p className="Autor">{PhrasesDatas.author}</p>
    </div>
  )
}

export default RandomPhrases;