# Developer Handbook

> ## Database (`Configuration/Design`)
> ---
> #### {{ Id }} is `uuid` or `int`.
> #### The fields and there types `int/smallint/bigint/string/boolean/jsonb/date/datetime`.
> #### Settings of fields
>   - `nullable`?
>   - Has `default` value?
> #### Foreign Keys `FK`?
> #### Indexes for faster queries (`clustured/non-clustured`).
> #### Has `unique` index?
> #### Do I need to query in batches in order to not overload the RAM of the app?
> #### The design of the database fields/table name must reflect the business logic of our service.
> #### Database seperation between domains and avoid coupling as much as possible.
> #### Too many indexes impact app performance(`Create/Update/Delete` operations).
<br>

> ## Service Layer `Design/Implimentation`
> ---
> #### Determine which domain the methods should be in.
> #### The service the method should be within or do we need a new service?
> #### Authentication:
>   - Is user `authorised`?
>   - Does the user have correct `permissions/role`?
>   - Does action need to be `audited`?
> #### Do I need to run something asynchronous? (ex. `Rails uses sidekiq jobs`, `.Net uses async`)
> #### For code first `SQL queries` or procedures you use make sure they are:
>   - Efficient.
>   - Don't load large amount of data in memory.
>   - Select only the fields you need for processing in memory.
> #### Domains must not be coupled between them.  Communication between Domains must be either through `events/listeners` or an `Interface/Contract`.
> #### Do not have common domains used by multiple Domains.
<br>

> ## SOLID principles
> ---
> #### The Single Responsibility Principle: `states that a class should do one thing and therefore it should have only a single reason to change.`
> #### The Open-Closed Principle: `requires that classes should be open for extension and closed to modification.`
> #### The Liskov Substitution Principle: `states that subclasses should be substitutable for their base classes.`
> #### The Interface Segregation Principle: `Segregation means keeping things separated, and the Interface Segregation Principle is about separating the interfaces. The principle states that many client-specific interfaces are better than one general-purpose interface. Clients should not be forced to implement a function they do no need.`
> #### The Dependency Inversion Principle: `The principle states that many client-specific interfaces are better than one general-purpose interface. Clients should not be forced to implement a function they do no need. We want our classes to be open to extension, so we have reorganized our dependencies to depend on interfaces instead of concrete classes. Our PersistenceManager class depends on InvoicePersistence instead of the classes that implement that interface.`
<br>

> ## Coupling
> ---
> #### When services are loosely coupled, a change to one service should not require a change to another. 
> #### A classic mistake is to pick an integration style that tightly binds one service to another, causing changes inside the service to require a change to consumers.
> #### A loosely coupled service knows as little as it needs to about the services with which it collaborates. This also means we probably want to limit the number of different types of calls from one service to another, because beyond the potential performance problem, chatty communication can lead to tight coupling.
> #### `Ultimately, some coupling in our system will be unavoidable.` 
> #### <b>Types:</b>
> - `Domain Coupling` describes a situation in which one microservice needs to interact with another microservice, because the first microservice needs to make use of the functionality that the other microservice provides.
> - `Temporal Coupling`  it refers to a situation in which one microservice needs another microservice to do something at the same time for the operation to complete. Both microservices need to be up and available to communicate with each other at the same time for the operation to complete.
> - `Pass-Through Coupling` describes a situation in which one microservice passes data to another microservice purely because the data is needed by some other microservice further downstream. The major issue with pass-through coupling is that a change to the required data downstream can cause a more significant upstream change.
> - `Common Coupling` occurs when two or more microservices make use of a common set of data. A simple and common example of this form of coupling would be multiple microservices making use of the same shared database, but it could also manifest itself in the use of shared memory or a shared filesystem. The main issue with common coupling is that changes to the structure of the data can impact multiple microservices at once. Sources of common coupling are also potential sources of resource contention.
> - `Content Coupling` describes a situation in which an upstream service reaches into the internals of a downstream service and changes its internal state. The most common manifestation of this is an external service accessing another microservice’s database and changing it directly. The differences between content coupling and common coupling, is that with content coupling the lines of ownership become less clear, and it becomes more difficult for developers to change a system

<br>

> ## Observability (Logs/Metrics)
> ---
> ### `Log Aggregation`
> #### Collecting information across multiple microservices, a vital building block of any monitoring or observability solution
> <br>
> 
> ### `Metrics Aggregation`
> #### Capturing raw numbers from our microservices and infrastructure to help detect problems, drive capacity planning, and perhaps even scale our applications. It can be hard to know what “good” looks like when we’re looking at metrics for a more complex system. Our website is seeing nearly 50 4XX HTTP error codes per second. The secret to knowing when to panic and when to relax is to gather metrics about how your system behaves over a long-enough period of time that clear patterns/trends emerge.
> 
> #### A key benefit of understanding your trends is when it comes to capacity planning. Are we reaching our limit? How long until we need more hosts? In the new age of on-demand computing provided by infrastructure as a service (IaaS) vendors, we can cale up or down in minutes, if not seconds. This means that if we understand our usage patterns, we can make sure we have just enough infrastructure to serve our needs.
> <br>
> 
> ### `Are you doing OK?`
> #### Looking at error budgets, SLAs, SLOs, and so on to see how they can be used as part of making sure our microservice is meeting the needs of its consumers.
> <br>
> 
> ### `Distributed Tracing`
> #### Tracking a flow of calls across multiple microservice boundaries to work out what went wrong and derive accurate latency information
> #### Although the exact implementations vary, broadly speaking, distributed tracing tools all work in a similar way. Local activity within a thread is captured in a span. These individual spans are correlated using some unique identifier. The spans are then sent to a central collector, which is able to construct these related spans into a single trace.
> <br>
> 
> ### `Alerting`
> #### Often, too many alerts can cause significant issues. In 1979, there was a partial meltdown of a reactor at the Three Mile Island nuclear power station in the US. The investigation into the incident highlighted the fact that the operators of the facility were so overwhelmed by the alerts they were seeing that it was impossible to determine what action needed to be taken. There was an alert indicating the fundamental problem that needed to be addressed, but this wasn’t something that was obvious to the operators.
> #### <b>What makes for a good alert:</b>
>   -  Relevant `Make sure the alert is of value.`
>   -  Unique `Ensure that the alert isn’t duplicating another.`
>   -  Timely `We need to get the alert quickly enough to make use of it.`
>   -  Prioritized `Give the operator enough information to decide in what order the alerts should be dealt with.`
>   -  Understandable `The information in the alert needs to be clear and readable.`
>   -  Diagnostic `It needs to be clear what is wrong.`
>   -  Advisory `Help the operator understand what actions need to be taken.`
>   -  Focusing `Draw attention to the most important issues.`