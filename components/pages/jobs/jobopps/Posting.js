import React from 'react'

const Posting = () => {
  return (
    <div>


{/* <section>
        <div id="mechanicshortDes" class="jobDescShort">
            <h2>Mechanic</h2>
            <p>We are looking for a highly skilled mechanic to join our team. 
                The successful candidate will be responsible for...</p>
            <a href="#" id="mechanicToForm">Apply Now ></a>
        </div>
        <div id="mechanicPosForm" class="jobDescriptionPrompt">
            <form>
              <a href="#">
                <div id="closeButtonJobMechanic">
                  <svg version="1.1" class="closebuttonsvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                    <line x1="5.3" y1="5.3" x2="45" y2="45"/>
                    <line x1="44.9" y1="5.4" x2="5.3" y2="45"/>
                  </svg>
                </div>
              </a>
                <span>
                    <h3>Mechanics Position</h3>
                    <p>We are looking for a highly skilled and experienced Mechanic to join our team. 
                        They will be responsible for performing routine maintenance, diagnosing and repairing a wide range of vehicles, and ensuring that all work is completed to the highest standard.</p>
                    <p>This is a full-time position with competitive pay and benefits. If you are an experienced mechanic looking for a challenging and rewarding opportunity, we encourage you to apply.</p>
                    <h3>Key Responsibilities</h3>
                    <ul>
                        <li>Perform routine maintenance tasks, such as oil changes, tire rotations, and brake inspections</li>
                        <li>Diagnose and repair a wide range of mechanical and electrical issues in vehicles</li>
                        <li>Conduct thorough vehicle inspections to identify any potential issues</li>
                        <li>Communicate effectively with customers to explain the nature of repairs and provide accurate quotes for labor and parts</li>
                    </ul>
                </span>
                <h3>Apply Now</h3>
                <span class="namesSpan">
                <span>
                    <label for="name" class="labelCareers">Name</label>
                    <input type="text" id="nameInput" class="JobInput" name="name"  placeholder="John" required>
                </span>
                <span>
                    <label for="lastname" class="labelCareers">Last Name</label>
                    <input type="text" id="lastnameInput" class="JobInput" name="lastname"  placeholder="Smith" required>
                </span>
                </span>
                </br>
                <span>
                    <label for="number" class="labelCareers">Phone Number</label>
                    <input type="tel" id="numberInput" class="JobInput" name="number" placeholder="555-555-5555">
                </span>
                </br>
                <span>
                    <label for="emailcareer" class="labelCareers">Email</label>
                    <input type="text" id="emailInput" class="JobInput" name="emailcareer" placeholder="Johnsmith@email.com">
                </span>
                </br>
                <span>
                    <label for="ede" class="labelCareers">Earliest date of empoyment</label>
                    <input type="date" id="edeInput" class="JobInput" name="ede" required>
                </span>
                </br>
                <span>
                    <label for="cv" class="labelCareers">CV</label>
                    <input type="file" name="cv" class="JobInput" required>
                </span>
                <button type="button" onclick="jobs()">Submit</button>
            </form>
        </div>
      </section>

<!---- Dismantler Position (Job Opps) ---->
      <section>
        <div id="dismantlershortDes" class="jobDescShort">
          <h2>Auto Parts Dismantler</h2>
          <p>We are seeking a highly motivated individual to join our team as an Auto Parts Dismantler. 
            The candidate will be responsible for...</p>
          <a href="#" id="dismantlerToForm">Apply Now > </a>
        </div>
        <div id="dismantlerPosForm" class="jobDescriptionPrompt">
          <form>
            <a href="#">
              <div id="closeButtonJobDismantler">
                <svg version="1.1" class="closebuttonsvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                  <line x1="5.3" y1="5.3" x2="45" y2="45"/>
                  <line x1="44.9" y1="5.4" x2="5.3" y2="45"/>
                </svg>
              </div>
            </a>
            <span>
              <h3>Auto Parts Dismantler Position</h3>
              <p>We are seeking a highly motivated individual to join our team as an Auto Parts Dismantler.
                 The successful candidate will be responsible for safely and efficiently dismantling vehicles to obtain usable parts for resale.</p>
              <p>This is a full-time position with competitive pay and benefits. If you are an experienced Auto Parts Dismantler looking for a challenging and rewarding opportunity, we encourage you to apply.</p>
              <h3>Key Responsibilities</h3>
              <ul>
                  <li>Safely dismantle vehicles using hand and power tools.</li>
                  <li>Identify and remove usable parts in a timely and efficient manner.</li>
                  <li>Sort and categorize parts for storage and resale.</li>
                  <li>Maintain a clean and organized workspace.</li>
                  <li>Follow all health and safety guidelines and procedures.</li>
              </ul>
          </span>
          <h3>Apply Now</h3>
          <span class="namesSpan">
          <span>
              <label for="name" class="labelCareers">Name</label>
              <input type="text" id="nameInput" class="JobInput" name="name"  placeholder="John" required>
          </span>

          <span>
              <label for="lastname" class="labelCareers">Last Name</label>
              <input type="text" id="lastnameInput" class="JobInput" name="lastname"  placeholder="Smith" required>
          </span>
          </span>
          </br>
          <span>
              <label for="number" class="labelCareers">Phone Number</label>
              <input type="tel" id="numberInput" class="JobInput" name="number" placeholder="555-555-5555">
          </span>
          </br>
          <span>
              <label for="emailcareer" class="labelCareers">Email</label>
              <input type="text" id="emailInput" class="JobInput" name="emailcareer" placeholder="Johnsmith@email.com">
          </span>
          </br>
          <span>
              <label for="ede" class="labelCareers">Earliest date of empoyment</label>
              <input type="date" id="edeInput" class="JobInput" name="ede" required>
          </span>
          </br>
          <span>
              <label for="cv" class="labelCareers">CV</label>
              <input type="file" name="cv" required>
          </span>
          <button type="button" onclick="jobs()">Submit</button>
        </form>
      </div>
    </section>

<!---- Courier Position (Job Opps) ---->
    <section>
      <div id="deliveryshortDes" class="jobDescShort">
        <h2>Auto Part Courier</h2>
        <p>We are seeking a reliable and organized individual to join our team as an Auto Parts Courier. 
          The successful candidate will be responsible...</p>
        <a href="#" id="deliveryToForm">Apply Now > </a>
      </div>
      <div id="deliveryPosForm" class="jobDescriptionPrompt">
        <form>
          <a href="#">
            <div id="closeButtonJobdelivery">
              <svg version="1.1" class="closebuttonsvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                <line x1="5.3" y1="5.3" x2="45" y2="45"/>
                <line x1="44.9" y1="5.4" x2="5.3" y2="45"/>
              </svg>
            </div>
          </a>
          <span>
            <h3>Auto Parts Courier Position</h3>
            <p>We are seeking a reliable and organized individual to join our team as an Auto Parts Courier. 
              The successful candidate will be responsible for delivering auto parts to various locations in a timely and efficient manner.</p>
            <p>This is a full-time position with competitive pay and benefits. If you are an experienced driver looking for a challenging and rewarding opportunity, we encourage you to apply.</p>
            <h3>Key Responsibilities</h3>
            <ul>
              <li>Pick up auto parts and deliver them to designated locations</li>
              <li>Maintain accurate records of deliveries, including delivery times and dates.</li>
              <li>Follow delivery schedules and arrive at locations on time.</li>
              <li>Maintain a clean and organized delivery vehicle.</li>
              <li>Follow all traffic laws and safety regulations while driving.</li>
              <li>Communicate effectively with suppliers and customers to ensure smooth delivery processes.</li>
            </ul>
          </span>
          <h3>Apply Now</h3>
          <span class="namesSpan">
          <span>
            <label for="name" class="labelCareers">Name</label>
            <input type="text" id="nameInput" class="JobInput" name="name"  placeholder="John" required>
          </span>

          <span>
            <label for="lastname" class="labelCareers">Last Name</label>
            <input type="text" id="lastnameInput" class="JobInput" name="lastname"  placeholder="Smith" required>
          </span>
          </span>
          </br>
          <span>
            <label for="number" class="labelCareers">Phone Number</label>
            <input type="tel" id="numberInput" class="JobInput" name="number" placeholder="555-555-5555">
          </span>
          </br>
          <span>
            <label for="emailcareer" class="labelCareers">Email</label>
            <input type="text" id="emailInput" class="JobInput" name="emailcareer" placeholder="Johnsmith@email.com">
          </span>
          </br>
          <span>
            <label for="ede" class="labelCareers">Earliest date of empoyment</label>
            <input type="date" id="edeInput" class="JobInput" name="ede" required>
          </span>
          </br>
          <span>
            <label for="cv" class="labelCareers">CV</label>
            <input type="file" name="cv" required>
          </span>
            <button type="button" onclick="jobs()">Submit</button>
        </form>
      </div>
    </section>  

<!---- Sales Clerk Position (Job Opps) ---->
<section>
  <div id="salesshortDes" class="jobDescShort">
    <h2>Sales Clerk</h2>
    <p>We are seeking a customer-focused individual to join our team as an Auto Parts Sales Clerk. 
      The candidate will be responsible for assist...</p>
    <a href="#" id="salesToForm">Apply Now ></a>
  </div>
  <div id="salesPosForm" class="jobDescriptionPrompt">
    <form>
      <a href="#">
        <div id="closeButtonJobSales">
          <svg version="1.1" class="closebuttonsvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <line x1="5.3" y1="5.3" x2="45" y2="45"/>
            <line x1="44.9" y1="5.4" x2="5.3" y2="45"/>
          </svg>
        </div>
      </a>
      <span>
        <h3>Sales Clerk Position</h3>
        <p>We are seeking a customer-focused individual to join our team as an Auto Parts Sales Clerk. 
          The successful candidate will be responsible for assisting customers with their auto parts needs and providing excellent customer service.</p>
        <p>This is a full-time position with competitive pay and benefits. If you are a customer-focused individual with a passion for auto parts and excellent customer service, we encourage you to apply.</p>
        <h3>Key Responsibilities</h3>
        <ul>
          <li>Have good knowledge of automotive parts in order to be able to assist customers accurately.</li>
          <li>Greet and assist customers in a friendly and professional manner.</li>
          <li>Answer customer inquiries and provide information on products and services.</li>
          <li>Process sales transactions accurately and efficiently.</li>
          <li>Keep up-to-date with product knowledge and promotions.</li>
        </ul>
      </span>
      <h3>Apply Now</h3>
      <span class="namesSpan">
      <span>
        <label for="name" class="labelCareers">Name</label>
        <input type="text" id="nameInput" class="JobInput" name="name"  placeholder="John" required>
      </span>

      <span>
        <label for="lastname" class="labelCareers">Last Name</label>
        <input type="text" id="lastnameInput" class="JobInput" name="lastname"  placeholder="Smith" required>
      </span>
      </span>
      </br>
      <span>
        <label for="number" class="labelCareers">Phone Number</label>
        <input type="tel" id="numberInput" class="JobInput" name="number" placeholder="555-555-5555">
      </span>
      </br>
      <span>
        <label for="emailcareer" class="labelCareers">Email</label>
        <input type="text" id="emailInput" class="JobInput" name="emailcareer" placeholder="Johnsmith@email.com">
      </span>
      </br>
      <span>
        <label for="ede" class="labelCareers">Earliest date of empoyment</label>
        <input type="date" id="edeInput" class="JobInput" name="ede" required>
      </span>
      </br>
      <span>
        <label for="cv" class="labelCareers">CV</label>
        <input type="file" name="cv" required>
      </span>
        <button type="button" onclick="jobs()">Submit</button>
    </form>
  </div>
</section> 

<!---- Shipping Position (Job Opps) ---->
<section>
  <div id="shippingShortDes" class="jobDescShort">
    <h2>Shipping Clerk</h2>
    <p>We are seeking a highly organized and detail-oriented individual to join our team as an Auto Parts shipment clerk. 
      The successful candidate will be responsible for coordinating...</p>
    <a href="#" id="shippingToForm">Apply Now ></a>
  </div>
  <div id="shippingPosForm" class="jobDescriptionPrompt">
    <form>
      <a href="#">
        <div id="closeButtonJobShipping">
          <svg version="1.1" class="closebuttonsvg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <line x1="5.3" y1="5.3" x2="45" y2="45"/>
            <line x1="44.9" y1="5.4" x2="5.3" y2="45"/>
          </svg>
        </div>
      </a>
      <span>
        <h3>Shipping Clerk Position</h3>
        <p>We are seeking a highly organized and detail-oriented individual to join our team as an Auto Parts shipment clerk. 
          The successful candidate will be responsible for coordinating and expediting the shipping of auto parts to meet customer needs and ensure timely delivery.</p>
        <p>This is a full-time position with competitive pay and benefits. If you are a detail-oriented individual with a passion for shipping and logistics, we encourage you to apply.</p>
        <h3>Key Responsibilities and requirements</h3>
        <ul>
          <li>Have good knowledge of automotive parts in order to be able to meticulously inspect parts before delivery.</li>
          <li>Be early risers, as this shift starts at 6am and ends at 3pm.</li>
          <li>have the capability to operate independently through part of the day.</li>
          <li>Know how to deal with pressure well due to the high volume of work during our peak season.</li>
          <li>Be in good physical shape because this job demands a handling of different size and weight auto parts.</li>
          <li>Have team spirit as well as a positive energy towards work.</li>
        </ul>
      </span>
      <h3>Apply Now</h3>
      <span class="namesSpan">
      <span>
        <label for="name" class="labelCareers">Name</label>
        <input type="text" id="nameInput" class="JobInput" name="name"  placeholder="John" required>
      </span>

      <span>
        <label for="lastname" class="labelCareers">Last Name</label>
        <input type="text" id="lastnameInput" class="JobInput" name="lastname"  placeholder="Smith" required>
      </span>
      </span>
      </br>
      <span>
        <label for="number" class="labelCareers">Phone Number</label>
        <input type="tel" id="numberInput" class="JobInput" name="number" placeholder="555-555-5555">
      </span>
      </br>
      <span>
        <label for="emailcareer" class="labelCareers">Email</label>
        <input type="text" id="emailInput" class="JobInput" name="emailcareer" placeholder="Johnsmith@email.com">
      </span>
      </br>
      <span>
        <label for="ede" class="labelCareers">Earliest date of empoyment</label>
        <input type="date" id="edeInput" class="JobInput" name="ede" required>
      </span>
      </br>
      <span>
        <label for="cv" class="labelCareers">CV</label>
        <input type="file" name="cv" required>
      </span>
        <button type="button" onclick="jobs()">Submit</button>
    </form>
  </div>
</section> */}


    </div>
  )
}

export default Posting