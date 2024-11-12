import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { ApiClientComponent } from './components/api-client/api-client.component';
import { NgcontainerComponent } from './components/ngcontainer/ngcontainer.component';

export const routes: Routes = [
    {
        path:'add-emp',
        component:AddEmployeeComponent,

    },
    {
        path:'data-binding',
        component: DataBindingComponent
    },
    {
        path:'emp-list',
        component: EmployeeListComponent
    },
    {
        path:'structural-dir',
        component:StructuralDirComponent
    },
    {
        path:'attribute',
        component:AttributeDirectiveComponent
    },
    {
        path:'template',
        component:TemplateformComponent
    },
    {
        path:'api',
        component:ApiClientComponent
    },
    {
        path:'container',
        component: NgcontainerComponent
    }
];
