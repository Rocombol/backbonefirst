/*var listItemTpl=`<tr>
<td><%= name %><%= lastname %></td>
<td><%= gender %></td>
<td><%= email %></td>
<td><button class = 'showInfo'>Find more</button></td>
<td><button class = 'editInfo'>Edit</button></td>
</tr>`;*/



var listItemTpl=`
<td><%= name %> <%= lastname %></td>
<td><%= gender %></td>
<td><%= email %></td>
<td><button class = 'showInfo'>Find more</button></td>
<td><button class = 'editInfo'>Edit</button></td>`;


//template: _.template("<tr><td><%= name%> <%= lastname %></td><td><%= gender %></td><td><%= skype %></td><td><td><%= phone %></td><td><td><%= email %></td><td><button class = 'showInfo'>Find more</button></td><td><button class = 'editInfo'>Edit</button></td>"),
//<td><%= skype %></td>
//<td><%= phone %></td>
//<td><%= email %></td>