"use client";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [email, setEmail] = useState("");
  const [option1, setoprtion1] = useState("");
  const [option2, setoption2] = useState("");
  const [option3, setoprtion3] = useState("");
  const [option4, setoprtion4] = useState("");
  const [option5, setoprtion5] = useState("");
  const [option6, setoprtion6] = useState("");
  const [option7, setoprtion7] = useState("");
  const [option8, setoprtion8] = useState("");
  const [loading, setloading] = useState(true);




  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {

      setloading(false)
      const response = await fetch(
        "https://v1.nocodeapi.com/arjun999/google_sheets/WMUoLCyVpMscFqLl?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify([
            [
              email,
              option1 ? "Yes" : "No",
              option2 ? "Yes" : "No",
              option3 ? "Yes" : "No",
              option4 ? "Yes" : "No",
              option5 ? "Yes" : "No",
              option6 ? "Yes" : "No",
              option7 ? "Yes" : "No",
              option8 ? "Yes" : "No",
              new Date().toLocaleString(), // Adjust date formatting if needed
            ],
          ]),
        }
      );

      const allOption = [option1,
        option2,
        option3,
        option4,
        option5,
        option6,
        option7,
        option8]

      const countYes = allOption.filter(option => option != "").length;
      const countNo = allOption.filter(option => option === "No").length;


      if (countYes >= 7) {
        Swal.fire({
          title: 'Hurray, thanks for your response! ',
          text: 'You are a Blended Champ! Keep Up the Good Work in 2024. Take Every Chance to Encourage Your Teammates to Participate in the Blended Behaviours.Click to Avail Your Gift..',
          icon: 'success', 
          confirmButtonText: 'Okay',
        });
      }
      else if (countYes > 4) {
        Swal.fire({
          title: 'Hurray, thanks for your response! ',
          text: 'You are a Blended Proficient! You are Doing Good with Scope for Improvement in 2024. So, Take Some Resolutions & Become a Blended Expert with the Right Behaviours.Click to Avail Your Gift.',
          icon: 'success', 
          confirmButtonText: 'Okay',
        });
      } else if (countYes <= 4) {
        Swal.fire({
          title: 'Hurray, thanks for your response! ',
          text: 'You are a Blended Newbie! Commit to the Blended Behaviours in 2024 & Take Your Work Experience to the Next Level with our Tenets. Click to Avail Your Gift.',
          icon: 'success', 
          confirmButtonText: 'Okay',
        });

      }


      setloading(true); // Assuming you meant to set loading back to false here
      setEmail("");

    } catch (error) {
      console.error("Error submitting data:", error);
      setloading(false);
    }
  };




  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center h-screen">
        <form
        action="/"
          id="myForm"
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md w-full sm:w-80"
        >
          <label className="block mb-4">
            <input
              type="checkbox"
              value={"A"}
              name="option1"
              className="mr-2"
              onChange={(e) => {
                setoprtion1(e.target.value);
              }}
            />
            Option 1
          </label>
          <label className="block mb-4">
            <input
              type="checkbox"
              value={"B"}
              name="option2"
              onChange={(e) => {
                setoption2(e.target.value);
              }}
              className="mr-2"
            />
            Option 2
          </label>
          <label className="block mb-4">
            <input
              type="checkbox"
              value={"C"}
              name="option3"
              onChange={(e) => {
                setoprtion3(e.target.value);
              }}
              className="mr-2"
            />
            Option 3
          </label>
          <label className="block mb-4">
            <input
              type="checkbox"
              value={"D"}
              name="option4"
              onChange={(e) => {
                setoprtion4(e.target.value);
              }}
              className="mr-2"
            />
            Option 4
          </label>
          <label className="block mb-4">
            <input
              type="checkbox"
              value={"E"}
              name="option5"
              onChange={(e) => {
                setoprtion5(e.target.value);
              }}
              className="mr-2"
            />
            Option 5
          </label>
          <label className="block mb-4">
            <input
              type="checkbox"
              value={"C"}
              name="option6"
              onChange={(e) => {
                setoprtion6(e.target.value);
              }}
              className="mr-2"
            />
            Option 3
          </label>
          <label className="block mb-4">
            <input
              type="checkbox"
              value={"D"}
              name="option7"
              onChange={(e) => {
                setoprtion7(e.target.value);
              }}
              className="mr-2"
            />
            Option 4
          </label>
          <label className="block mb-4">
            <input
              type="checkbox"
              value={"E"}
              name="option8"
              onChange={(e) => {
                setoprtion8(e.target.value);
              }}
              className="mr-2"
            />
            Option 5
          </label>
          <label className="block mb-4">
            <span className="block mb-1">Email:</span>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </label>
          <input
            type="submit"
            value={loading ? "Submit " : "Loading..."}
            onSubmit={handleSubmit}
            className="bg-green-500 text-white p-2 w-full rounded cursor-pointer"
          />
        </form>
      </div>
    </>
  );
}
