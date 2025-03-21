# Database Schema

## Table: `bankAccount`

| Column Name   | Data Type      | Constraints |
|---------------|----------------|-------------|
| accountid     | integer        | NN          |
| savingstotal  | integer        | NN          |

## Table: `user`

| Column Name   | Data Type      | Constraints |
|---------------|----------------|-------------|
| displayname   | character(255) | NN          |
| email         | character(255) | NN          |
| password      | character(255) | NN          |
| securityq1    | character(255) | NN          |
| q1a           | character(255) | NN          |
| securityq2    | character(255) | NN          |
| q2a           | character(255) | NN          |
| accountid     | integer        | NN          |
| allocatedfunds| integer        | NN          |

## Table: `goal`

| Column Name   | Data Type      | Constraints |
|---------------|----------------|-------------|
| goalid        | integer        | NN          |
| target        | integer        | NN          |
| plant         | character(255) | NN          |
| email         | character(255) | NN          |
| goahame       | character(255) | NN          |

## Table: `transaction`

| Column Name   | Data Type      | Constraints |
|---------------|----------------|-------------|
| goalid        | integer        | NN          |
| amount        | integer        | NN          |
| timestar      | timestamp      | NN          |