import React from 'react'
import Card from '../components/Game/Card'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';

const Row = ({task, setToDo, day}) => {

  
  const { updateTask, toDo, addReminder, sendReminder, reminders, fetchReminder } = useUserContext()

  const [reminder, setReminder] = React.useState(false)
  const [time, setTime] = React.useState('')

  const [reminderSet, setReminderSet] = React.useState(false)


  const handleClick = (e, taskName) => {

    const newTask = toDo[day].map(task => {
      if(task.task == taskName){
        task.done = !task.done
      }
      return task
    })
    
    toDo[day] = newTask

    const newToDo = toDo

    setToDo(newToDo)
    
    updateTask(newToDo, localStorage.getItem('plant'))
  }
  return (
    <>
      {reminder && !reminderSet &&
      <div className='fixed z-40 top-[200px] left-[100px]'>
        <div className='bg-white rounded-[20px] custom-border-1 h-[200px] w-[200px] px-3 py-5'>
          <h1 className='text-center feather text-2xl text-black font-bold'>Set Time</h1>
          <input onChange={e => setTime(e.target.value)} type="time" className='w-full rounded-[10px] border-2 border-[#16A637] px-5 py-3 my-5 feather' />
          <div className='flex justify-between'>
            <button onClick={() => setReminder(false)} className='feather text-white font-bold text-md rounded bg-red-600 px-3 py-2'>Cancel</button>
            <button onClick={() => addReminder(time, task.task, setReminderSet)} className='feather text-white font-bold text-md rounded bg-green-600 px-3 py-2'>Set</button>
          </div>
        </div>
      </div>
      }
      <div className=''>
        <div className='flex justify-between py-5'>
          <div className='flex items-center'>
            {reminder ? 
            <i class="fa-solid fa-bell text-blue-500 mr-2 text-lg"></i>
            :
            <i onClick={() => setReminder(reminder => !reminder)} class="fa-regular fa-bell text-blue-500 mr-2 text-lg"></i>
            }
            <div className='flex'>
              <p className='feather mr-3'>{task.task}</p>
              {
                task.task.includes('Buy') && (
                  <>
                    <span className='feather mr-3'>-</span>
                    <Link to='/marketplace' className='feather text-blue-500'>Order now</Link>
                  </>
                )
              }
            </div>
          </div>
          <input onClick={e => handleClick(e, task.task)} type="checkbox" className='w-[50px]' defaultChecked={task.done} />
        </div>
        <hr />
      </div>
    </>
  )
}

const generateBugs = (setBugCount) => {
  const randomTopValue = -Math.floor(Math.random() * 550)
  const randomLeftValue = Math.floor(Math.random() * window.innerWidth)
  const [hide, setHide] = React.useState(false)
  const handleClick = () => {
    setHide(true)
    setBugCount(bugCount => bugCount+1)
  }
  return(
    <>
      {!hide && 
      <div onClick={handleClick} style={{ top: `${randomTopValue}px`, left: `${randomLeftValue}px` }} className='absolute moveDown'>
        <i class="fa-solid fa-bug text-white text-[50px]"></i>
      </div>}
    </>
  )
}

const Game = () => {
  const { nextDay, day, fetchProfile, profile, toDo, setToDo, fetchTask, animateTick } = useUserContext()
  const [step, setStep] = React.useState(localStorage.getItem('plant') == 'tomato' ? 2 : 1)
  const [scareCrow, setScareCrow] = React.useState(false)
  const [hurt, setHurt] = React.useState(false)
  const [isDaytime, setIsDaytime] = React.useState(true); // Track day or night mode
  const [Birds, setBirds] = React.useState(false); // Track if birds are flying
  const [isDarkMode, setIsDarkMode] = React.useState(false); // Track dark mode
  const [changeTimeClicked, setChangeTimeClicked] = React.useState(false); // Track if "Change Time" button is clicked
  const [bugCount, setBugCount] = React.useState(0)
  const bugs = Array.from({ length: 10 }, (_, index) => generateBugs(setBugCount))
  const [showScore, setShowScore] = React.useState(false)
  const [game, setGame] = React.useState(false)
  React.useEffect(() => {
    if(bugCount == 10){
      setShowScore(true)
      localStorage.setItem('bugCount', bugCount)
      setBugCount(0)
    }
    if(game){
      setTimeout(() => {
        setShowScore(true)
        localStorage.setItem('bugCount', bugCount)
        setBugCount(0)
      }, 30000)
    }
  }, [game, bugCount])
  React.useEffect(() => {
    if(hurt){
      setTimeout(() => {
        setHurt(false)
      }, 3000)
    }
  }, [hurt])

  React.useEffect(() => {
    if(scareCrow){
      setTimeout(() => {
        setScareCrow(false)
      }, 4500)
    }
  }, [scareCrow])

  React.useEffect(() => {
    fetchProfile()
    fetchTask()
    if(toDo.length > 0){
      setScareCrow(toDo[day].some(t => t.task.includes('water') || t.task.includes('Water')))
    }
  }, [day])


  const changeMode = () => {
    // Toggle between day and night mode
    setIsDaytime((prevIsDaytime) => !prevIsDaytime);
    // Toggle dark mode if needed
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
    // Toggle the state to indicate that "Change Time" button is clicked
    setChangeTimeClicked((prevChangeTimeClicked) => !prevChangeTimeClicked);
  };

  const plants = [
    {
      img: '/tomato.png',
      name: 'Tomato'
    },
    {
      img: '/pumpkin.png',
      name: 'Pumpkin'
    },
    {
      img: '/carrot.png',
      name: 'Carrot'
    },
    {
      img: '/cucumber.png',
      name: 'Cucumber'
    }
  ]
  const containerStyle = {
    backgroundColor: changeTimeClicked ? '#0048AB' : (isDaytime ? '#FFFDB4' : '#333'),
    transition: 'background-color 0.5s',
  };

  return (
    <>
      {step == 1 ? 
      <div className='px-5 py-5 mb-20'>
        <h1 className='feather text-center font-bold text-2xl'>Which plant do you <i>plan</i> to grow ?</h1>
        <div className='grid grid-cols-2 gap-5'>
          {plants.map(plant => <Card plant={plant} setStep={setStep} />)}
        </div>
      </div>
      : 
      <div className='mb-20'>
        {game && !showScore &&
        <div className='bg-zinc-800 w-screen h-screen'>
          {bugs}
        </div>
        }
        {game && showScore && 
        <div className='bg-zinc-800 w-screen h-screen'>
          <div className='flex justify-center items-center h-full'>
            <div className='bg-white rounded-[20px] custom-border-1 px-5 py-5'>
              <h1 className='feather text-center font-bold text-2xl'>You scored {localStorage.getItem('bugCount')} points!</h1>
            </div>
          </div>
        </div>
        }
        <div onClick={() => {
          setGame(game => !game)
          setShowScore(false)
        }} className='absolute left-[10px] top-[70px]'>
          <div className='bg-zinc-800 z-50 rounded-[50%] px-2 py-2'>
            {game || showScore ? 
            <i class="fa-solid fa-xmark text-white"></i>
            :
            <i class="fa-solid fa-bug-slash text-white"></i> }
          </div>
        </div>
        <Link to='/chat'>
          <div className='absolute right-[10px] top-[70px]'>
            <div className='bg-[#16A637] rounded-[50%] px-2 py-2'>
            <i className="fa-brands fa-rocketchat text-white"></i>
            </div>
          </div>
        </Link>
        <div className='bg-[#FFFDB4] h-full w-full py-5' style={containerStyle}>
          <h1 className='feather text-center text-[#16A637] font-bold text-4xl'>Day {day*day*10}</h1>
          {hurt && 
          <div className='absolute z-20 mt-[180px] ml-[150px]'>
              <Player
              autoplay
              loop
              src={`/plant_stages/hurt.json`}
              style={{ height: '150px', width: '150px' }}
            >
              <Controls />
            </Player>
          </div>
          
          }
          <div className='absolute ml-[70px] mb-[5px]'>
            {isDaytime ? (
              <Player
                autoplay
                loop
                src={`/sun.json`}
                style={{ height: '250px', width: '250px' }}
              >
                <Controls />
              </Player>
            ) : (
              <Player
                autoplay
                loop
                src={`/moon.json`}
                style={{ height: '250px', width: '250px' }}
              >
                <Controls />
              </Player>
            )}
          </div>
          <div className=''>
            {scareCrow && (
              <>
                <div className='absolute left-[-100px] transform rotate-45'>
                  <Player
                    autoplay
                    loop
                    src={`/scarecrow.json`}
                    style={{ height: '250px', width: '250px' }}
                  >
                    <Controls />
                  </Player>
                </div>
                <div className='typewriter absolute top-[220px] left-[90px] bg-white rounded-[5px] px-2 p-1'>
                  <h1 className='feather'>It's time to water!</h1>
                </div>
              </>
            )}
          </div>
            <div className='absolute ml-[50px]'>
            <Player
              autoplay
              loop
              src={`/wind.json`}
              style={{ height: '300px', width: '300px' }}
            >
              <Controls />
            </Player>
          </div>
          <div className='absolute ml-[50px]'>
            <Player
              autoplay
              src={`/plant_stages/day${day}zl.json`}
              style={{ height: '300px', width: '300px' }}
            >
              <Controls />
            </Player>
          </div>
          
          <div onClick={() => setHurt(true)}>
            <Player
              autoplay
              src={`/plant_stages/day0.json`}
              style={{ height: '300px', width: '300px' }}
            >
              <Controls />
            </Player>
          </div>
        </div>
        <div className='py-5 px-5'>   
        {animateTick ?
          <>
            <Player
              autoplay
              loop
              src={`/finishedtask.json`}
              style={{ height: '150px', width: '150px' }}
            >
              <Controls />
            </Player>
          </>
          :
          <>
            <p className='feather text-black font-bold text-xl'>To-do</p>
            {profile && toDo && toDo[day].map(task => <Row scareCrow={scareCrow} setScareCrow={setScareCrow} day={day} toDo={toDo} setToDo={setToDo} task={task} /> )}
          </>
        }
          <div className='flex justify-center my-5'>
            <button onClick={nextDay} className='feather rounded-[30px] bg-black text-white text-center font-semibold px-5 py-3'>Move to next day</button>
          </div>
          <div className='flex justify-center my-5'>
            <button onClick={changeMode} className='feather rounded-[30px] bg-black text-white text-center font-semibold px-5 py-3'>Change Time</button>
          </div>
        </div>
      </div>
      }
    </>
  )
}

export default Game