import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import skis from './skis.jpg';

function Home() {
    return (
        <div>
            <header><h1 id="page-title">Welcome to the about me page!</h1><hr /></header>
            <Nav />
            <div class="container">
			<p><span class="notable">Hi there! </span>I am Thomas, and you are 
viewing an "about me" page written for CIS 658. I am a software engineer
 for Vibration Research. Hope you're doing well today, and that tomorrow
 is even better!</p>
			<p>In case you forgot what I look like, here's a most flattering picture:</p>
			<div class="image"><img src={skis} alt="Thomas enlightened" width="80%" /></div>
			<p>(Not to worry, I was fine.)</p>
			<p>One of my favorite quotes is by the great theologian Charles H. 
Spurgeon. I find it somewhat amusing, given the relative seriousness of 
most of his other writings.</p>
			<aside class="notable">"Growing a beard is a habit most natural, Scriptural, manly and beneficial."<br />- Charles H. Spurgeon</aside>
			<p>Below are some pet statistics from my family over the years.</p>
			<table>
				<thead>
					<tr>
						<th>Year</th>
						<th>Number of goats my family owns</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>2009</td>
						<td>0</td>
					</tr>
					<tr>
						<td>2010</td>
						<td>2</td>
					</tr>
					<tr>
						<td>2011</td>
						<td>2</td>
					</tr>
					<tr>
						<td>2012</td>
						<td>2</td>
					</tr>
					<tr>
						<td>2013</td>
						<td>1</td>
					</tr>
					<tr>
						<td>2014</td>
						<td>3</td>
					</tr>
					<tr>
						<td>2015</td>
						<td>3</td>
					</tr>
					<tr>
						<td>2016</td>
						<td>2</td>
					</tr>
					<tr>
						<td>2017</td>
						<td>2</td>
					</tr>
					<tr>
						<td>2018</td>
						<td>2</td>
					</tr>
					<tr>
						<td>2019</td>
						<td>2</td>
					</tr>
					<tr>
						<td>2020</td>
						<td>2</td>
					</tr>
					<tr>
						<td>2021</td>
						<td>2</td>
					</tr>
					<tr>
						<td>2022</td>
						<td>2</td>
					</tr>
				</tbody>
			</table>
		</div>
        <Footer />
        </div>
    );
}

export default Home;