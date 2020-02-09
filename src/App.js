const Pet = ({name, animal, breed}) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h3", {}, breed)
  ])
}
const App = () => {
  return React.createElement(
    "div", 
    {id: "blueprint"},
    [
    React.createElement("h1", {class: "title"}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havenese"
    }),
    React.createElement(Pet,
      {
        name: "Pepper",
        animal: "Bird",
        breed: "Cockatiel"
    }),
    React.createElement(Pet,
      {
        name: "Doink",
        animal: "cat",
        breed: "stray"
      }
    )
    ]
  )
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
)