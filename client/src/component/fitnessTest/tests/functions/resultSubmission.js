//* Date, result, userId
//! Add test validation (which test is it?)

const resultSubmission = (result) => {
  const date = parseInt(Date.now);

  fetch(`/api/session`, {
    method: "POST",
    header: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ date, result, id }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("Error in network");
    })
    .then((resJson) => {
      //* setResult => resJson
      //* Keep track of day = 7 days later, flip completed to false
    });
};

export default resultSubmission;
