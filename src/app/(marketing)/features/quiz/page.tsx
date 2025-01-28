
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CodeEditor from "@/pages/CodeEditor";
import Project from "@/pages/Project";
import DetailsA from "@/pages/DetailsA";
import Login from "@/pages/Login";
import Portal from "@/pages/Portal";
import QuestionPage from "@/pages/QuestionPage";
import Quiz from "@/pages/Quiz";
import ForumPage from "@/pages/forum";
import TimeTracker from '@/components/quiz/TimeTracker';


// Import FontAwesome for profile icon (optional)
import SelfProfile from "@/pages/SelfProfile";
import Profiles from "@/pages/Profiles";
import SwitchTest from "@/pages/SwitchTest";
import CreateMeeting from "@/pages/CreateMeeting";
import AdministratorLogin from "@/pages/AdministratorLogin";
import CreateAssignment from "@/pages/CreateAsssignment";
//import Assignment from "@/pages/Assignment";
import AssignmentNew from "@/pages/AssignmentNew";
import Landing from "@/pages/Landing";
import UserLogin from "@/pages/UserLogin";

const  App =() =>{
  return (
    <div className="dark:bg-black bg-white dark:bg-grid-white/[0.07] bg-grid-black/[0.07] w-full h-full">
          <div className="min-h-screen flex w-[95%] overflow-y-auto gap-10 md:gap-20 justify-start items-center flex-col max-w-6xl 2xl:max-w-7xl mx-auto pb-32">
            <Landing />
          </div>
        </div>
  );
}

export default App;
