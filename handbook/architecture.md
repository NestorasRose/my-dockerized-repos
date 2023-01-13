# `Architecture`
## `Microservices`
Microservices are independently releasable services that are modeled around a business domain. A service encapsulates functionality and makes it accessible to other services via networks—you construct a more complex system from these building blocks. Microservices are an architecture choice that is focused on giving you many options for solving the problems you might face. 
<br><br>They are a type of service-oriented architecture, albeit one that is opinionated about how service boundaries should be drawn, and one in which independent deployability is key. They are technology agnostic, which is one of the advantages they offer. From the outside, a single microservice is treated as a black box. It hosts business functionality on one or more network endpoints over whatever protocols are most appropriate.
<br><br>Ensure that you embrace the concept of independent deployability of your microservices. To ensure independent deployability, we need to make sure our microservices are loosely coupled. Microservices should avoid the use of shared databases. If a microservice wants to access data held by another microservice, it should go and ask that second microservice for the data. This gives the microservices the ability to decide what is shared and what is hidden, which allows us to clearly separate functionality that can change freely or infrequently.
<br><br>

## `Service-Oriented Architecture`
Service-oriented architecture (SOA) is a design approach in which multiple services collaborate to provide a certain end set of capabilities. Communication between these services occurs via calls across a network rather than method calls within a process boundary.
<br><br>Striving to make the services smaller, but everything coupled to a database and everything needs to be deployed together. Service oriented? Yes. But it’s not microservices.
<br><br> 

## `Single-Process Monolith`
The code is deployed as a single process, you may have multiple instances of this process for robustness or scaling reasons, but fundamentally all the code is packed into a single process. 
<br><br>A classic single-process monolithic deployment can make sense for many organizations. David Heinemeier Hansson, the creator of Ruby on Rails, has made the case effectively that such an architecture makes sense for smaller organizations. Even as the organization grows, however, the monolith can potentially grow with it, which brings us to the modular monolith.
<br><br>

## `Modular Monolith/Domain Driven Architecture`
As a subset of the single-process monolith, the modular monolith is a variation in which the single process consists of separate modules. Each module can be worked on independently, but all still need to be combined together for deployment. If the module boundaries are well defined, it can allow for a high degree of parallel work, while avoiding the challenges of the more distributed microservice architecture by having a much simpler deployment topology. Shopify is a great example. 
<br><br>One of the challenges of a modular monolith is that the database tends to lack the decomposition we find in the code level, leading to significant challenges if you want to pull apart the monolith in the future.
<br><br>

## `Distributed Monolith`
A distributed monolith is a system that consists of multiple services, but for whatever reason, the entire system must be deployed together. A distributed monolith might well meet the definition of an SOA but fails to deliver on the promises of SOA.
<br><br>A distributed system is one in which the failure of a computer you didn’t even know existed can render your own computer unusable. It has all the disadvantages of a distributed system, and the disadvantages of a single-process monolith, without having enough of the upsides of either.
<br><br>Distributed monoliths typically emerge in an environment in which not enough focus was placed on concepts like information hiding and cohesion of business functionality. Instead, highly coupled architectures cause changes to ripple across service boundaries, and seemingly innocent changes that appear to be local in scope break other parts of the system.
<br><br>

### `Monoliths and Delivery Contention`
As more and more people work in the same place, they get in one another’s way—for example, different developers wanting to change the same piece of code, different teams wanting to push functionality live at different times (or to delay deployments), and confusion around who owns what and who makes decisions.
<br>