# An-Elevator-Control-System
It is a software system that is main functionally is it is a Real-Time system 
is bulit using angular and fearbase firebase
-------------------------------------------------------------------------------------------------
Functional Requirements of the system:

⮚ User Requirements:

1- Each passenger can request car by pressing on Floor Button

2- Each passenger can choose floor by pressing on Car Button of specific floor number

3-Each passenger can call emergency by pressing on Emergency Button

⮚ System Requirements:

1.1 – Floor button will be turned on if passenger pressed on it

1.2 – Indicator will send the floor position to Elevator controller system .

1.3 – Elevator controller system will add that request to the requests bank list.

1.4 – Elevator controller system chooses the available and nearest car based on floor position.

1.5 – Elevator controller system will send signal to the car chosen before.

1.6 – Specific car will go to the floor.

1.7 – if car reached the target floor , doors will open.

1.8 – after 5sec doors will be closed , if there is an object between doors , doors will be opened again.

2.1 – Car button will be turned on if passenger pressed on it.

2.2 – Indicator will send the target floor position to Elevator controller system .

2.3 – Elevator controller system will add that request to the requests bank list.

2.4 – After 5sec doors will be closed , if there is an object between doors , doors will be opened again.

2.5 – car will be moving toward target floor until it reached the destination.

2.6 – if car reached the target floor , doors will open.

2.7 – after 5sec doors will be closed , if there is an object between doors , doors will be opened again.

3.1 – Emergency button will be turned on if passenger pressed on it.

3.2 – Indicator will send the floor position where emergency button was pressed to Elevator controller system .

3.3 – Elevator controller system will add that request.

3.4 – Elevator controller system will handle the emergency by sending the car to nearest floor and then open the doors.

3.5 – After 5sec doors will be closed , if there is an object between doors , doors will be opened again.

3.6 -car will be stop or freeze until issues resolved.


