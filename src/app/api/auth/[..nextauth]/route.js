import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import {connectDB} from '@/lib/mongodb'
import User from '@/models/User'
import {compare} from 'bcryptjs'

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            name: 'credentials',
            credentials:{
                email:{label: 'Email' , type: 'email'}
            }
        })
    ]
})