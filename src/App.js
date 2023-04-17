import Reacg , {useState} from 'react';
import './App.css';

function App() {

  const  [showFinalResult ,setFinalResult]=useState(false);
  const [score ,setScore]=useState(0);
  const [currentQestion,setCurrentQestion]=useState(0);

const [age,setAge]=useState()
  const questions = [
    {
      text: "Başkalarının yanında heyecanımı kontrol edebilirim.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "genellikle", isCorrect: true },
        
      ],
    },
    {
      text: "Kendimi başarılı bir insan olarak görürüm.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "genellikle", isCorrect: true },
      ],
    },
    {
      text: "Seçimlerimde başkalarına bağımlı değilimdir.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "genellikle", isCorrect: true },
      ],
    },
    {
      text: "Yaşamdaki zorluklarla baş edebilirim.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "genellikle", isCorrect: true },
      ],
    },
    {
      text: "Benim için aşılamayacak sorun yoktur.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "genellikle", isCorrect: true },
      ],
    },
    {
      text: "Başkalarının görüşlerine saygı gösteririm.",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "genellikle", isCorrect: true },
      ],
    },
    {
      text: "Problemlerimin üstesinden gelebileceğime inanırım",
      options: [
        { id: 0, text: "asla", isCorrect: false },
        { id: 1, text: "nadiren", isCorrect: false },
        { id: 3, text: "genellikle", isCorrect: true },
      ],
    },
  ];
  const optionClicked= (isCorrect)=> {
    if (isCorrect) {
      setScore (score+1)
    }
    if(currentQestion+1 < questions.length) {
      setCurrentQestion(currentQestion+1);
    }
    else {setFinalResult(true)};



  }
  const restartTest=()=> {
    setScore(0);
    setCurrentQestion(0);
    setFinalResult(false);
  }



  return (
    <div className="App">
      <div classname='container'>
        <h1>ÖZGÜVEN TESTİ</h1>
        <h2>Geçerli Puan: {score}</h2>

        { showFinalResult ?
         <div className='result'>
         <h1>Sonuç</h1>
         <h2>({(score/questions.length)*100}%)kendine güveniyor.</h2>
         <button onClick={()=> restartTest()}>Testi Yeniden Başlat</button>


       </div>
       :
       <div classname ='question-card'>
          <h2>{questions.length}sorudan{currentQestion+1} soru</h2>
          <h3>{questions[currentQestion].text}</h3>
          <ul>
            {questions[currentQestion].options.map((option)=> {
              return(
                <li onClick={()=>optionClicked(option.isCorrect)} key={option.id}>
                  {option.text}

                </li>
              )
            })}
          </ul>

        </div>
        }
      </div>
     
    </div>
  );
}

export default App;
