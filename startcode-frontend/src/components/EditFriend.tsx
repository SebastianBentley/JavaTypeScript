import React, { useState } from "react";
import IFriend, { Gender } from "../interfaces/interfaces";
import { useMutation, gql } from "@apollo/client";
import { ALL_FRIENDS } from "./AllFriends";

const EDIT_FRIEND = gql`
mutation editFriend($friend:FriendEditInput){
  editFriend(input: $friend){
    firstName
    lastName
    email
  }
}
`
interface IFriendInput {
  firstName: string
  lastName: string
  password: string
  email: string
}

type AddFriendProps = {
  initialFriend?: IFriendInput
}

interface IKeyableFriend extends IFriendInput {
  [key: string]: any
}
const EditFriend = ({ initialFriend }: AddFriendProps) => {
  const EMPTY_FRIEND: IFriendInput = { firstName: "", lastName: "", password: "", email: "" }
  let newFriend: IFriendInput = initialFriend ? initialFriend : { ...EMPTY_FRIEND }
  const [friend, setFriend] = useState({ ...newFriend })

  const [editFriend, { data }] = useMutation(
    EDIT_FRIEND,
    {
      update(cache, { data }) {
        const editedFriend = data.editFriend;
        const d: any = cache.readQuery({ query: ALL_FRIENDS })
        if (!d) {
          return
        }
        let getAllFriends = d.getAllFriends
        cache.writeQuery({
          query: ALL_FRIENDS,
          data: { getAllFriends: [...getAllFriends, editedFriend] }
        })
      }
    }
  )

  const handleChange = (event: any) => {
    const id = event.currentTarget.id;
    let friendToChange: IKeyableFriend = { ...friend }
    friendToChange[id] = event.currentTarget.value;
    setFriend({ ...friendToChange })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //alert(JSON.stringify(friend))
    //Todo save friend on servers
    editFriend({ variables: { friend: { ...friend } } })
    setFriend({ ...EMPTY_FRIEND, password:"" })
  }


  return (
    <form onSubmit={handleSubmit}>
        <label>
        Email <br />
        <input type="text" id="email" value={friend.email} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        New FirstName<br />
        <input type="text" id="firstName" value={friend.firstName} onChange={handleChange} />
      </label>
      <br />
      <label>
        New LastName <br />
        <input type="text" id="lastName" value={friend.lastName} onChange={handleChange} />
      </label>
      <br />
      <label>
        New Password <br />
        <input type="text" id="password" value={friend.password} onChange={handleChange} />
      </label>
      <br /><br />
      <input type="submit" value="Save Friend" />
    </form>
  );
}

export default EditFriend;