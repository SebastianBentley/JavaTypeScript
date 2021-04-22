/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client"
import IFriend from "../interfaces/interfaces"

interface IFriendResult {
  getFriendFromEmail: IFriend
}

interface IVariableInput {
  email: {email: string}
}

const GET_FRIEND = gql`
 query getFriendFromEmail($email: FriendEmailInput){
  getFriendFromEmail(input:$email){
    id
    firstName
    lastName
    email
    role
  }
}
`

export default function FindFriend() {
  const [email, setEmail] = useState("")
  const [getFriend,{loading, called, data}] = useLazyQuery<IFriendResult, IVariableInput>(
    GET_FRIEND,
    {fetchPolicy: "cache-and-network"}
  );
  
  const fetchFriend = () => {
    alert(`Find friend with email: ${email}`)
    getFriend({variables: {email:{email: email }}})
  }

  return (
    <div>
      Email:<input type="txt" value={email} onChange={e => {
        setEmail(e.target.value)
      }} />
      &nbsp; <button onClick={fetchFriend}>Find Friend</button>
      <br />
      <br />

      {called && loading && <p>Loading...</p>}
      {data && (
      <div>
      <p>{data.getFriendFromEmail.firstName}</p>
      <p>{data.getFriendFromEmail.lastName}</p>
      </div>
      )}

    </div>)
}
