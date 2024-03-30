import React from "react";
import axios from 'axios'
import { useAuthContext } from "./AuthContext"

const UserContext = React.createContext()

// const serverUrl = 'http://localhost:5000/api'
// const serverUrl = 'https://agroscape-server-967ee60b99c8.herokuapp.com/api'
const serverUrl = 'https://medbot-backend.vercel.app/api'

export const UserContextProvider = ({children}) => {


    const { email } = useAuthContext()
    
    const [animateTick, setAnimateTick] = React.useState(false)

    const [userError, setUserError] = React.useState({
        error: false,
        message: ""
    })

    const [users, setUsers] = React.useState([
        {
            _id: 1,
            name: "User 1",
            email: ""
        },
        {
            _id: 2,
            name: "User 2",
            email: ""
        },
        {
            _id: 3,
            name: "User 3",
            email: ""
        },
        {
            _id: 4,
            name: "User 4",
            email: ""
        },
    ])

    const fetchUsers = () => {
        axios.get(`${serverUrl}/users`)
        .then(res => {
            setUsers(res.data.users)
        })
    }

    const [marketItems, setMarketItems] = React.useState([
        {
            _id: 1,
            name: "Dr. John Doe",
            number: "+91-1234567890",
            address: "City Hospital, 123 Main Street, Cityville",
            role: "Pediatrician",
            img: "https://assets.quickerala.com/logo/logo_443682_1687421755.jpg"
        },
        {
            _id: 2,
            name: "Dr. Jane Smith",
            number: "+91-9876543210",
            address: "General Hospital, 456 Park Avenue, Townsville",
            role: "General Practitioner",
            img: "https://assets.quickerala.com/logo/logo_437830_1665578456.png"
        },
        {
            _id: 3,
            name: "Dr. Michael Johnson",
            number: "+91-5678901234",
            address: "Community Clinic, 789 Elm Street, Villagetown",
            role: "Gynecologist",
            img: "https://assets.quickerala.com/logo/logo_444197_1690181271.jpg"
        },
        {
            _id: 4,
            name: "Dr. Emily Williams",
            number: "+91-2345678901",
            address: "Regional Medical Center,101 Oak Lane, Countryside",
            role: "Orthopedic Surgeon",
            img: "https://assets.quickerala.com/logo/logo_445391_1698223601.jpg"
        }
    ])

    

    

    

    const [toDo, setToDo] = React.useState([
        // Day 0
        [
          { task: 'Buy tomato seeds', done: false },
          { task: 'Prepare soil', done: false },
          { task: 'Plant tomato seeds', done: false }
        ],
        // Day 1
        [
          { task: 'Water tomato seeds', done: false }
          // Additional tasks based on specific needs
        ],
        // Day 2
        [
          { task: 'Check soil moisture', done: false },
          { task: 'Provide sunlight', done: false }
          // Additional tasks based on specific needs
        ],
        // Day X (Adjust as needed)
        [
          { task: 'Transplant seedlings (if applicable)', done: false },
          { task: 'Continue watering and monitoring', done: false },
          // Additional tasks based on specific needs
        ]
    ]);

    const [messages, setMessages] = React.useState([
        {
          from: 'user',
          message: 'Hello'
        },
        {
          from: 'bot',
          message: 'Hi, I am a AI first-aid chatbot named medbot. How can I help you?'
        }
    ])

    const [bloodbank, setBloodbankItems] = React.useState([
        {
            _id: 1,
            name: "District Hospital Blood Bank",
            number: 5842625101,
            address: "State Highway 16 Hospital Junction, Aluva",
            img: "https://lh3.googleusercontent.com/p/AF1QipOrXSKjqwiirmpIFljBdT3Mt5wdIB6OqsmBTwJz=s680-w680-h510",
            groups_needed: "A+, B+, O+, AB+"
        },
        {
            _id: 2,
            name: "Blood Donors Kerala Charitable Society",
            number: 9539166565,
            address: "Star Building, AMC : 19/331,Two, FBOA Rd, Thainoth Lane, Aluva, Kerala",
            img: "https://lh3.googleusercontent.com/p/AF1QipM0M2E-ACdeuqMIrbzxaNtCZ3ZfjU_22r3I5E_-=s680-w680-h510",
            groups_needed: "A+, B+, O+, AB+"
        },
        {
            _id: 3,
            name: "Indian Blood Bank Society",
            number: 7736001020,
            address: "KeraleeyamBuilding, Edappally, near M.A.J Hospital, Kochi, Kerala",
            img: "https://cdn2.advanceinfotech.org/kozhikode.directory/1200x675/business/2662/blood-bank-wandc-hospital-in-palayam-kozhikode-kerala-673004-1676372995.webp",
            groups_needed: "A+, B+, O+, AB+"
        },
        {
            _id: 4,
            name: "Shree Narayana Institute Of Medical Sciences Blood Bank",
            number: 4842479199,
            address: "574J+CWC, Chalakka, Kunnukara, Kerala 683594",
            img: "https://lh3.googleusercontent.com/p/AF1QipM-zGTvb0IInxg5sTSkluPDKMrQfYJK5tD3j09s=s680-w680-h510",
            groups_needed: "A+, B+, O+, AB+"
        },
        {
            _id: 5,
            name: "Sunrise Institute Of Medical Sciences Private Limited Blood Bank",
            number: 4844160000,
            address: "Thrikkakara, Kakkanad, Kochi, Kerala",
            img: "https://lh3.googleusercontent.com/p/AF1QipOfRIQYuYea9wf77fuUKS-yPSmAgbiUcOyD9wtZ=s680-w680-h510",
            groups_needed: "A+, B+, O+, AB+"
        }
    ])

    const [reminders, setReminders] = React.useState([])

    const [day, setDay] = React.useState(0)

    const [profile, setProfile] = React.useState({})

    const fetchMarketplace = () => {
        try {
            axios.get(`${serverUrl}/doctors`)
            .then(res => {
                setMarketItems(res.data.marketplace)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const fetchBloodbank = () => {
        try {
            axios.get(`${serverUrl}/bloodbank`)
            .then(res => {
                setBloodbankItems(res.data.bloodbank)
            })
        } catch (error) {
            console.log(error)
        }
    }


    
    const plantChosen = (setStep) => {
        localStorage.setItem('plant', 'tomato')
        localStorage.setItem('day', 0)
        setStep(2)
        axios.post(`${serverUrl}/plant`, {plant: localStorage.getItem('plant'), id: localStorage.getItem('id'), tasks: toDo})
    }

    const checkIfAllChecked = () => {
        return !toDo[day].some(task => !task.done)
    }

    const nextDay = () => {
        const check = checkIfAllChecked()
        console.log(check)
        if(check){
            setAnimateTick(true)
            setTimeout(() => {
                setAnimateTick(false)
            }, 2000)
            localStorage.setItem('day', Number(localStorage.getItem('day')) + 1)
            setDay(day => day+1)
            console.log(day+1)
            axios.post(`${serverUrl}/day`, {day: parseInt(localStorage.getItem('day')), id: localStorage.getItem('id')})
            .then(res => {
                setProfile(res.data.profile)
            })
        }
    }

    const fetchProfile = () => {
        try {
            axios.get(`${serverUrl}/profile/${localStorage.getItem('id')}`)
            .then(res => {
                setProfile(res.data.profile)
                localStorage.setItem('day', res.data.profile.day)
                setDay(res.data.profile.day)
            })
        } catch (error) {
            console.log(error)
        }
    }

    const updateTask = (newToDo, plant) => {
        axios.post(`${serverUrl}/task`, {tasks: newToDo, plant, id: localStorage.getItem('id')})
        .then(res => {
            setProfile(res.data.profile)
        })
    }

    const fetchTask = () => {
        axios.get(`${serverUrl}/task/${localStorage.getItem('plant')}/${localStorage.getItem('id')}`)
        .then(res => {
            setToDo(res.data.tasks)
        })
    }

    const fetchMessages = () => {
        axios.get(`${serverUrl}/chat`)
        .then(res => {
            setMessages(res.data.messages)
        })
    }

    const sendMessage = async (message) => {
        try {
          const response = await axios.post(`${serverUrl}/chat`, { message });
          const reply = response.data.reply;
          setMessages([...messages, { from: 'user', message: message }, { from: 'bot', message: reply }]);
        } catch (error) {
          console.error('Error:', error);
        }
      };

    const addReminder = (time, task, setReminderSet) => {
        console.log(time, task)
        setReminderSet(true)
        axios.post(`${serverUrl}/reminder`, {time, task, id: localStorage.getItem('id')})
        
        if('serviceWorker' in navigator){
            navigator.serviceWorker.register('/serviceWorker.js')
            .then(reg => {
                console.log('Service Worker Registered', reg)
                reg.showNotification(`It's ${time}!!!`, {
                    body: `It's time to ${task}!!!`
                })
            })
            .catch(err => {
                console.log('Service Worker Not Registered', err)
            })
        }
    }

    const fetchReminder = () => {
        console.log('fetching reminders')
        axios.get(`${serverUrl}/reminder/${localStorage.getItem('id')}`)
        .then(res => {
            console.log(res.data.reminders)
            setReminders(res.data.reminders)
        })
    }

    const sendReminder = (message) => {
        console.log('running', reminders);
        if('serviceWorker' in navigator){
            navigator.serviceWorker.register('/serviceWorker.js')
            .then(reg => {
                console.log('Service Worker Registered', reg)
                reg.showNotification('Reminder', {
                    body: 'This is a reminder'
                })
            })
            .catch(err => {
                console.log('Service Worker Not Registered', err)
            })
        }
        // const now = new Date();
        // const currentHours = now.getHours();
        // const currentMinutes = now.getMinutes();
        // reminders.forEach(reminder => {
        //     const [reminderHours, reminderMinutes] = reminder.time.split(':').map(Number);
        //     if (currentHours === reminderHours && currentMinutes < reminderMinutes) {
        //         alert(`Reminder: ${reminder.task}`);
        //         // setReminders(prevReminders => prevReminders.filter((_, i) => i !== index))
        //     }
        // });
    }

    return(
        <UserContext.Provider value={{
            userError,
            marketItems,
            profile,
            users,
            day,
            toDo,
            messages,
            reminders,
            animateTick,
            bloodbank,
            fetchReminder,
            sendReminder,
            addReminder,
            setMessages,
            fetchTask,
            fetchMessages,
            sendMessage,
            setToDo,
            fetchProfile,
            nextDay,
            setDay,
            plantChosen,
            fetchUsers,
            updateTask,
            fetchMarketplace,
            fetchBloodbank
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => React.useContext(UserContext)