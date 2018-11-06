# Mod 4 Practice Code Challenge: Sushi Saga

Welcome to Sushi Saga, where your journey to sushi is only just beginning!

We've had a bit of trouble with our patented Sushi Saga conveyor belt system, so before you can eat, you're going to have to help us get it working.

**Here's what it should look like:**

![Sushi Saga](./sushi-saga-demo.gif)

**Doesn't that look delicious?!**

## Setup

### Server

To get you going, we've got a backend just chock full of sushi just waiting to be eaten! To get get these guys, you're going to have to do the follow:

1. Navigate to `sushi-saga-client` and run `json-server --watch db.json`
2. Navigate to `http://localhost:3000/sushis` to confirm delivery of sushi!

### Client

Just as all good sushi needs a firm base of delicious rice, we've given you quite a bit of code to start off your frontend!

This will be located within the `sushi-saga-client` directory of this repo. Inside are all the components you'll need, as well as instructions as to where and how to render those components properly.

The component hierarchy should be as follows:

- `App` is parent to both `SushiContainer` and `Table`
- `SushiContainer` is parent to both `Sushi` and `MoreButton`

Be sure to read all of the notes in the all of the components before getting started! They will give you clues as to how and where to manage `state` and `props`

## Deliverables

Inspectors will be coming by to check that our patented Sushi Saga conveyor belt is working properly! Oh no! They will be checking the following:

1. Sushi is properly received from the server
   - @App fetch request in `componentDidMount()`
   - Initialize state of sushiList as an empty array `state={sushiList: []}`
   - Store data to the state of sushiList `this.setState({ sushiList: data})`
2. Only 4 sushi are rendered at a time
   - @App pass down sushiList as props
   - @SushiContainer render only 4 sushi by using map of `sushiList.slice(0,4)` and pass element as props to Sushi component `<Sushi {..sushi}/>`
   - @Sushi component render detail of each sushi with name, price, and image.

3) Clicking the "More Sushi!" button produces a new set of 4 sushi

   - @MoreButton pass a call back to @Container and @App
   - @App call back function `setState({indexIncreament: this.state.indexIncrearement + 4})` to keep track of the index with each click and pass it down to @container
   - @Container render Sushi component with `slice(indexIncreament, indexIncreament + 4)`

4) Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to appear on the table.

   - @Sushi create `isEaten` which return true/false if `eatenSushiId.includes(id)` when click on sushi and use to display/remove the sushi image
   - @Sushi onClick activate call back function and pass id to the function `onClick={() => onClickSushi(id)}` to parent @App
   - @App create `onClickSushi(id)` to update state `this.setState({ eatenSushiId: [...this.state.eatenSushiId, id] })`. This function and `eaternSushiId` list are passed down to @Container and @Sushi
   - @Table render number of plates is the same length of the array `eatenSushiId` so we can pass it down from parent @App

5) We need to make money! Whenever a sushi is eaten, customers should be automatically charged! Based on a budget decided by you, the developer, the amount of money remaining should go down by the cost of the sushi that was eaten. There is a spot to display this number in the `Table` component
   -@App create state `moneyBalance` to keep track of customer account and it should be passed down to @Table

6) No free meals! Customers cannot eat any sushi that exceeds the amount of money remaining in their balance
   -@App `onClickSushi(id,price)` and do balance check and only update state if the current balance is larger than 0.

### Bonus!

If and only if you have time, you may work on the following:

1. SushiWallet! Add a form for customers to add more money to their balance
   -@App import Form component and pass call back onSubmitForm set state of moneyBalance = current balance + amout set from form.

2. Full rotation! When the end of the line of sushi is reached, the conveyor belt should start from the beginning. Sushi that have already been eaten should remain eaten. It would be creepy if they reappeared!
   -@App `onClickMoreButton` add logic if the increment is larger than 96 then reset state increment back to 0.

3. Anything else!

**Note:** If at the end of the challenge you have achieved all the functionality required but the style looks off, this is okay!
