## 🧠 Section A: Logical Thinking & System Design

**Scenario:**  
You're building a system to track borrowed library books. Think through how you'd structure the data and design the system to handle scale and prevent errors.

---

### ✍️ Challenge Instructions

Answer the following questions **briefly and clearly**. Use bullet points or short sentences where helpful.

---

### 📚 1. Three pieces of data to store for each book:
- What key information would help identify and manage each book?

---
#### A. ISBN
* Acts as a unique identifier to help distinguish a book incase they have similar titles but different authors.
* To add on to that a barcode or copy ID is essential when tracking the books a user has borrowed.
#### B. Title
* This is the name of the book so people can search for or recognize it.
#### C. Status
* Helps toindicate the availability of the book if it is borrowed, reserved or lost.
 

### 🚫 2. How to prevent the same book from being borrowed twice:
- What logic or system check would you implement?

#### Answer
* Create a field known as book status. 
* This specific field checks the availability of a certain book to a user whether it is available or borrowed. 
* If the book is available then one is allowed to get it else denied.
* Once borrowed and the user tries to get it again they will get an alert saying cannot borrow a book twice.


### 📈 3. Scaling to 10,000 books and 1,000 users — what needs to change:
- What would you update in your design or infrastructure to handle this growth?

#### A. Infrastructure
* Through hosting the application on a server or cloud service such as AWS or Microsoft Azure.
* Ensure data backup and recovery plans are in check.
#### B. Data optimization
* Through data normalization it ensures the data is organised into separate tables to avoid duplication eg Books, Authors and Users.
### 🔄 4. Store book info and borrowing record together or separately — why?
- Share your reasoning for how you'd structure the data.

#### Answer
* Store them separately which is through data normalization. Reason being to avoid duplication, enhance data integrity and data correctness


Take your time to think through each part. We're looking for clarity, logic, and practical design thinking. Good luck!
