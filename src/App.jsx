import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

// Components
import Loader from "./pages/loader/loader";
import Header from "./components/Header";
import Landing from "./pages/landing/Landing";
import Portfolio from "./pages/portfolio/Portfolio";
import ProjectDetails from "./pages/portfolio/[project]/ProjectDetails";
import Resume from "./pages/resume/Resume";
import Contact from "./pages/contact/Contact";
import PageNotFound from "./pages/404/PageNotFound";
import AboutMe from "./components/AboutMe";
// import AnimatedRoutes from "./components/AnimatedRoutes";

/*
# Customizing Your Portfolio

## Adding Your Own Projects
1. Navigate to the `_data` folder.
2. Modify the `experience.json` file to include your projects.

## Replacing Project Images
1. Access the `public/projectImages` directory.
2. Replace the existing project images with your own.

## Handling Form Submissions
1. Obtain an API Key to receive form submissions.
2. Refer to the Form component for detailed instructions.

## Need Help or Have Questions?
If you need assistance or have any questions, feel free to reach out via LinkedIn or email.

## Support and Star
Enjoying this project? Please consider giving it a star (🌟).
I'm committed to providing ongoing updates and new features.
Your suggestions and feedback are highly valued and encouraged!
*/




function App() {
  // Personal details for the user
  const personalDetails = {
    name: "Amol Chaudhari",
    location: "United States",
    email: "amolchaudhari141@gmail.com",
    brand:
      "My unique blend of technical expertise, creative thinking, and background in computer science allows me to approach each problem with unique and deep understanding of the end user's perspective, resulting in highly effective user-centred digital products.",
  };

  const location = useLocation();

  // State to manage loader visibility
  const [showLoader, setShowLoader] = useState(true);

  const [originalTitle, setOriginalTitle] = useState();

  useEffect(() => {
    // Hide loader when initial route is loaded
    if (location.pathname !== "/") {
      setShowLoader(false);
    }

    // Store the original document title
    if (!originalTitle) {
      setOriginalTitle(document.title);
    }

    // Handle document title change when tab visibility changes
    const handleTabChange = () => {
      if (document.hidden) {
        document.title = "👋🏻 Git pulling you back in!";
      } else {
        document.title = originalTitle;
      }
    };

    // Listen for visibility change events
    window.addEventListener("visibilitychange", handleTabChange);
    return () => window.removeEventListener("visibilitychange", handleTabChange);
  }, [location, originalTitle]);

  return (
    <>
      {showLoader ? (
        // Show loader until initial route is loaded
        <Loader setShowLoader={setShowLoader} />
      ) : (
        <>
          {/* Header */}
          <Header />
          {/* Define routes */}
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Landing name={personalDetails.name} tagline={personalDetails.tagline} />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/resume" element={<Resume brand={personalDetails.brand} />} />
            {/* <Route path="/resume" element={<Resume personalDetails={personalDetails} />} /> */}
            <Route path="/About" element={ <AboutMe/> } />

            <Route
              path="/contact"
              element={
                <Contact
                  name={personalDetails.name}
                  location={personalDetails.location}
                  email={personalDetails.email}
                />
              }
            />
            <Route path="/page-not-found" element={<PageNotFound />} />
            <Route path="/portfolio/:projectTitle" element={<ProjectDetails />} />
            {/* Fallback route for unknown paths */}
            <Route path="*" element={<Navigate to="/page-not-found" />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
