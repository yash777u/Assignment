import React, { useEffect, useState } from 'react';
import DashboardService from '../service/Service';
import { motion } from 'framer-motion';

function DashboardComponent({ userId }) {
  const [userDetails, setUserDetails] = useState(null);
  const [userAnalytics, setUserAnalytics] = useState(null);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    // Fetch user details
    DashboardService.getUserDetails()
      .then(data => {
        console.log('User Details:', data);
        setUserDetails(data);
      })
      .catch(error => console.error('Error fetching user details:', error));

    // Fetch user analytics
    DashboardService.getUserAnalytics()
      .then(data => {
        console.log('User Analytics:', data);
        setUserAnalytics(data);
      })
      .catch(error => console.error('Error fetching user analytics:', error));

    // Fetch user posts
    DashboardService.getUserPosts()
      .then(data => {
        console.log('User Posts:', data);
        setUserPosts(data);
      })
      .catch(error => console.error('Error fetching user posts:', error));

  }, [userId]);


  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row justify-center items-start lg:items-stretch gap-8">
        {/* User Details Card */}
        {userDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-sm"
          >
            <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
              <div className="relative mx-auto w-36 rounded-full">
                <span className="absolute right-0 m-3 h-3 w-3 rounded-full bg-green-500 ring-2 ring-green-300 ring-offset-2"></span>
                <img className="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
              </div>
              <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">{userDetails.name}</h1>
              <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">{userDetails.category}</h3>
              <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">{userDetails.bio}</p>

              <div class="flex justify-around text-center mt-5 mb-2">
                <div>
                  <p class="font-bold text-lg">500</p>
                  <p class="text-gray-500">Followers</p>
                </div>
                <div>
                  <p class="font-bold text-lg">300</p>
                  <p class="text-gray-500">Following</p>
                </div>
                <div>
                  <p class="font-bold text-lg">20</p>
                  <p class="text-gray-500">Total Posts</p>
                </div>
              </div>
              <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                <li className="flex items-center py-3 text-sm">
                  <span>Contact Option</span>
                  <span className="ml-auto"><span className="rounded-full bg-green-200 py-1 ml-2.5 px-2 text-xs font-medium text-green-700">{userDetails.contactOptions}</span></span>
                </li>
              </ul>

              <div class="flex justify-center mt-3 ">
                <a href="{userDetails.link}" class="font-medium text-center text-blue-600 dark:text-blue-500 hover:underline">
                  Visit Profile
                </a>
              </div>


            </div>
          </motion.div>
        )}

        {/* Analytics Card */}
        {userAnalytics && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-sm"
          >
            <div className="flex w-72 mt-7">
              <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
                <div className="p-3">
                  <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-gray-700 to-gray-400 text-center text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-4 h-7 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="pt-1 text-right">
                    <p className="text-sm font-light capitalize">Accounts Reached</p>
                    <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">{userAnalytics.accountReached}</h4>
                  </div>
                </div>
                <hr className="opacity-50" />
                <div className="p-4">
                  <p className="font-light"><span className="text-sm font-bold text-green-600">+22% </span>vs last month</p>
                </div>
              </div>
            </div>
            <div className="flex w-72 mt-8">
              <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
                <div className="p-3">
                  <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 text-center text-white shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mt-4 h-7 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div className="pt-1 text-right">
                    <p className="text-sm font-light capitalize">Account Engaged</p>
                    <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">{userAnalytics.accountEngaged}</h4>
                  </div>
                </div>
                <hr className="opacity-50" />
                <div className="p-4">
                  <p className="font-light"><span className="text-sm font-bold text-green-600">+3% </span>vs last month</p>
                </div>
              </div>
            </div>
            <div class="flex justify-around text-center space-x-4 mt-5">
              <div>
                <img src="data:image/png;base64,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" alt="Ads Run" class="w-16 h-16 mx-auto mb-2" />
                <p class="font-bold text-lg">5</p>
                <p class="text-gray-500">Ads Run</p>
              </div>
              <div>
                <img src="https://www.svgrepo.com/download/42557/promotion.svg" alt="Active Promotions" class="w-16 h-16 mx-auto mb-2" />
                <p class="font-bold text-lg">2</p>
                <p class="text-gray-500"> Promotions</p>
              </div>
              <div>
                <img src="https://d3sxshmncs10te.cloudfront.net/icon/free/svg/6147335.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkM3N4c2htbmNzMTB0ZS5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTcyMTQ0MzkzNiwicSI6bnVsbCwiaWF0IjoxNzIxMTg0NzM2fQ__.1dfaf9d6d8bbbc54fa27a1d669a3fedad332a4ac5d63856c1779d52b247848df" alt="Total Stories" class="w-16 h-16 mx-auto mb-2" />
                <p class="font-bold text-lg">30</p>
                <p class="text-gray-500"> Stories</p>
              </div>
            </div>

          </motion.div>
        )}
      </div>

      {/* User Posts */}
      {userPosts.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center flex-wrap gap-4 mt-8"
        >
          {userPosts.map(post => (
            <div key={post.id} className="flex bg-white shadow-lg rounded-lg mt-2 md:mx-auto my-8 max-w-md md:max-w-2xl">
              <div className="flex items-start px-4 py-6">
                <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
                <div>
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900 -mt-1">{userDetails.name}</h2>
                    <small className="text-sm text-gray-700">{userDetails.category}</small>
                  </div>
                  <p className="mt-3 text-gray-700 text-sm">
                    {post.content}
                  </p>
                  <div className="mt-4 flex items-center">
                    <div className="flex text-gray-700 text-sm mr-3">
                      <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                      </svg>
                      <span>{post.totalSaves}</span>
                    </div>

                    <div className="flex text-gray-700 text-sm mr-8">
                      <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                      <span>{post.totalComments}</span>
                    </div>
                    <div className="flex text-gray-700 text-sm mr-4">
                      <svg fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-1" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      <span>{post.totalShares}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </motion.div>
      )}
    </div>
  );
}

export default DashboardComponent;
