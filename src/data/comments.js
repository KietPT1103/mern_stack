export const getCommentData = async () => {
    return [
        {
            "_id": "1",
            "postId": "1",
            "user": {
                "userId": "1",
                "username": "john_doe",
                "email": "john.doe@example.com",
            },
            "parent": null,
            "replyOnUser": null,
            "comment": "This is a great blog post! Really informative.",
            "likes": 5,
            "createdAt": "2022-12-31T17:22:05.092+0000",
            "updatedAt": "2022-03-31T17:22:05.092+0000",
            "status": "approved"
        },
        {
            "_id": "2",
            "postId": "1",
            "user": {
                "userId": "2",
                "username": "alice_smith",
                "email": "alice.smith@example.com"
            },
            "parent": "1",
            "replyOnUser": null,
            "comment": "I love the way you explained the concepts here.",
            "likes": 10,
            "createdAt": "2023-01-10T09:15:00.000+0000",
            "updatedAt": "2023-01-12T12:45:00.000+0000",
            "status": "approved"
        },
        {
            "_id": "3",
            "postId": "1",
            "user": {
                "userId": "3",
                "username": "bob_jones",
                "email": "bob.jones@example.com"
            },
            "parent": "1",
            "replyOnUser": null,
            "comment": "I found this article very helpful, thanks for sharing.",
            "likes": 8,
            "createdAt": "2023-02-03T11:50:00.000+0000",
            "updatedAt": "2023-02-04T16:00:00.000+0000",
            "status": "approved"
        },
        {
            "_id": "4",
            "postId": "1",
            "user": {
                "userId": "4",
                "username": "charlie_brown",
                "email": "charlie.brown@example.com"
            },
            "parent": null,
            "replyOnUser": null,
            "comment": "There are a few points I would like to discuss further, but overall great post.",
            "likes": 3,
            "createdAt": "2023-03-01T08:20:00.000+0000",
            "updatedAt": "2023-03-01T08:22:00.000+0000",
            "status": "pending"
        }
    ]
}