<!-- <% let dueToday = 0; %>
<% let pastDues = 0; %>

<% let todaysDate = new Date() %>
<% for(i = 0; i < taskOnes.length; i++) {%>
<%        let taskone = taskOnes; %>
<%      if(taskone[i].date === todaysDate) {%>
<%          dueToday++; %>
<%      } %>
<%      if(taskOnes[i].date < todaysDate) {%>
<%          pastDues++; %>
<%      } %> 
<% } %>

<% for(i = 0; i < taskTwos.length; i++) {%>
<%      if(taskTwos[i].date === todaysDate) {%>
<%          dueToday++; %>
<%      } %>
<%      if(taskTwos[i].date < todaysDate.setHours(0,0,0,0)) {%>
<%          pastDues++; %>
<%      } %> 
<% } %>

<% for(i = 0; i < taskThrees.length; i++) {%>
<%      if(taskThrees[i].date === todaysDate.setHours(0,0,0,0)) {%>
<%          dueToday++; %>
<%      } %>
<%      if(taskThrees[i].date < todaysDate.setHours(0,0,0,0)) {%>
<%          pastDues++; %>
<%      } %>
<% } %>

<% for(i = 0; i < taskFours.length; i++) {%>
<%      if(taskFours[i].date === todaysDate.setHours(0,0,0,0)) {%>
<%          dueToday++; %>
<%      } %>
<%      if(taskFours[i].date < todaysDate.setHours(0,0,0,0)) {%>
<%          pastDues++; %>
<%      } %>
<% } %>

<% for(i = 0; i < taskFives.length; i++) {%>
<%      if(taskFives[i].date === todaysDate.setHours(0,0,0,0)) {%>
<%          dueToday++; %>
<%      } %>
<%      if(taskFives[i].date < todaysDate.setHours(0,0,0,0)) {%>
<%          pastDues++; %>
<%      } %>
<% } %>

<% for(i = 0; i < taskSixes.length; i++) {%>
<%      if(taskSixes[i].date === todaysDate.setHours(0,0,0,0)) {%>
<%          dueToday++; %>
<%      } %>
<%      if(taskSixes[i].date < todaysDate.setHours(0,0,0,0)) {%>
<%          pastDues++; %>
<%      } %>
<% } %> -->