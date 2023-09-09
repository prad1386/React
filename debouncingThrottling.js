// Debouncing in Javascript
let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data ..", counter++);
}

const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d);
  }
}

const betterFunction = debounce(getData, 300);

//Debounse in React
const [pinCode, setPinCode] = React.useState("");

<input
      placeholder="Search Input.."
      onChange={(event) => setPinCode(event.target.value)}
 />

React.useEffect(() => {
  const getData = setTimeout(() => {
    axios
    .get(`https://api.postalpincode.in/pincode/${pinCode}`)
    .then((response) => {
      console.log(response.data[0]);
    });
  }, 2000)

  return () => clearTimeout(getData)
}, [pinCode])